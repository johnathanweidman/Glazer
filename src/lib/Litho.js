// import * as  THREE from './three/three.module.js';

import * as THREE from './three/three.module';

// import Stats from './lib/three/libs/stats.module.js';
// import { GUI } from './lib/three/libs/dat.gui.module.js';

// import { OrbitControls } from './lib/three/controls/OrbitControls.js';

import { STLExporterOptimized } from './three/exporters/STLExporterOptimized.js';

var container, stats, gui, guiData, inputFiles, loadImageBtn, info;
var camera, scene, renderer, controls;

var image, imageName, canvas, imageGrayValues;

var theMesh;
var materialPhong;
var materialTranslucent;
var vertexBuffer;

materialPhong = new THREE.MeshPhongMaterial({ color: new THREE.Color(0xd5d5d5) });

var lithofunVertexShader = `

        varying vec2 vUv;

        void main() {

            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

        }

    `;

var lithofunFragmentShader = `

        uniform sampler2D theMap;
        uniform bool useTexture;
        varying vec2 vUv;

        void main() {

            vec4 texColor = texture2D( theMap, vUv );
            float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
            vec3 finalColor;

            if (useTexture) {
                finalColor = texColor.rgb;
                gl_FragColor = vec4( finalColor, gray * 0.2 + 0.8 );
            } else {
                finalColor = vec3(1.0, 1.0, 1.0);
                gl_FragColor = vec4( ( 1.0 - gray * 0.7 ) * finalColor, gray * 0.2 + 0.8 );
            }

        }
    `;

materialTranslucent = new THREE.ShaderMaterial({
	transparent: true,
	vertexShader: lithofunVertexShader,
	fragmentShader: lithofunFragmentShader,
	uniforms: {
		theMap: { value: null },
		useTexture: { value: true }
	}
});

function updateMeshTexture(texture) {
	if (materialTranslucent) {
		materialTranslucent.uniforms.theMap.value = texture;
		materialTranslucent.needsUpdate = true;
	}
}

function setUseTexture(use) {
	if (materialTranslucent) {
		materialTranslucent.uniforms.useTexture.value = use;
	}
}

function imageToMesh(input, settings) {
	guiData = {
		litophaneWidth: settings?.width || 100,
		minThickness: settings?.minThickness || 0.32,
		maxThickness: settings?.maxThickness || 2,
		xyAngle: 0,
		zStartAngle: 90,
		zEndAngle: 90,
		lithophaneMode: settings?.lithophaneMode,
		realistic: true
	};
	image = input;
	if (image.width < 2 || image.height < 2) {
		image = null;
		alert('Minimum image size is 2 pixels wide');
		return;
	}

	var doCreateMesh = canvas === undefined;

	if (doCreateMesh) {
		canvas = document.createElement('canvas');
		canvas.width = image.width;
		canvas.height = image.height;
		// canvas.hidden = true;

		var numPixels = image.width * image.height;

		imageGrayValues = new Float32Array(numPixels);
	}

	var canvasCtx2d = canvas.getContext('2d');
	console.log(canvasCtx2d);

	canvasCtx2d.drawImage(image, 0, 0);

	var imageData = canvasCtx2d.getImageData(0, 0, image.width, image.height);
	var canvasPixels = imageData.data;

	var invert = guiData.lithophaneMode;

	var width = image.width;
	var height = image.height;

	var p = 0;
	var pDest = image.width * (image.height - 1);
	for (var j = 0; j < height; j++) {
		for (var i = 0; i < width; i++) {
			var gray = (canvasPixels[p] + canvasPixels[p + 1] + canvasPixels[p + 2]) / 767;

			if (invert) {
				gray = 1 - gray;
			}

			imageGrayValues[pDest++] = gray;

			p += 4;
		}

		pDest -= 2 * width;
	}

	canvasCtx2d.putImageData(imageData, 0, 0);

	if (doCreateMesh) {
		if (theMesh) {
			theMesh = null;
			vertexBuffer = null;
		}

		theMesh = createMesh(guiData.realistic ? materialTranslucent : materialPhong);

		theMesh.matrixAutoUpdate = false;
		theMesh.updateMatrix();
	}

	updateMesh();
	return theMesh;
}

function createMesh(material) {
	var geometry = createGeometry();

	return new THREE.Mesh(geometry, material);
}

function createGeometry() {
	var pointsX = image.width;
	var pointsY = image.height;
	var halfX = pointsX * 0.5;
	var pointsPerPlane = pointsX * pointsY;
	var segmentsPerRow = pointsX - 1;
	var segmentsPerColumn = pointsY - 1;

	var geometry = new THREE.BufferGeometry();

	var indices = [];
	vertexBuffer = new Float32Array(2 * pointsPerPlane * 3);
	var uvs = [];
	var normals = [];

	// Vertices, normals and uvs
	var p = 0;
	var dv = 1 / segmentsPerColumn;
	var du = 1 / segmentsPerRow;

	for (var plane = 0; plane < 2; plane++) {
		var z = -plane;

		var v = 0;

		for (var j = 0; j < pointsY; j++) {
			var u = 0;

			for (var i = 0; i < pointsX; i++) {
				// Only uvs are valid here. Positions and normals are actually populated in updateMesh()

				vertexBuffer[p++] = i - halfX;
				vertexBuffer[p++] = j;
				vertexBuffer[p++] = z;

				uvs.push(u, v);

				normals.push(0, 0, 1);

				u += du;
			}

			v += dv;
		}
	}

	// Front and back planes faces
	for (var plane = 0; plane < 2; plane++) {
		for (var j = 0; j < segmentsPerColumn; j++) {
			for (var i = 0; i < segmentsPerRow; i++) {
				var a = i + j * pointsX + plane * pointsPerPlane;
				var b = a + 1;
				var c = a + pointsX;
				var d = c + 1;

				if (plane === 0) {
					indices.push(a, b, c);
					indices.push(b, d, c);
				} else {
					indices.push(a, c, b);
					indices.push(b, c, d);
				}
			}
		}
	}

	// Bottom faces
	for (var i = 0; i < segmentsPerRow; i++) {
		var a = i;
		var b = a + pointsPerPlane;
		var c = a + 1;
		var d = c + pointsPerPlane;

		indices.push(a, b, c);
		indices.push(b, d, c);
	}

	// Top faces
	for (var i = 0; i < segmentsPerRow; i++) {
		var a = pointsX * segmentsPerColumn + i;
		var b = a + 1;
		var c = a + pointsPerPlane;
		var d = b + pointsPerPlane;

		indices.push(a, b, c);
		indices.push(b, d, c);
	}

	// Left side faces
	for (var j = 0; j < segmentsPerColumn; j++) {
		var a = j * pointsX;
		var b = a + pointsX;
		var c = a + pointsPerPlane;
		var d = b + pointsPerPlane;

		indices.push(a, b, c);
		indices.push(b, d, c);
	}

	// Right side faces
	for (var j = 0; j < segmentsPerColumn; j++) {
		var a = j * pointsX + segmentsPerRow;
		var b = a + pointsX;
		var c = b + pointsPerPlane;
		var d = a + pointsPerPlane;

		indices.push(a, c, b);
		indices.push(a, d, c);
	}

	geometry.setIndex(indices);
	geometry.addAttribute('position', new THREE.BufferAttribute(vertexBuffer, 3));
	geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
	geometry.addAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

	return geometry;
}

function updateMesh() {
	if (!image) {
		return;
	}

	lithophaneFunctionCylinderSphere(
		image.width,
		image.height,
		imageGrayValues,
		vertexBuffer,
		guiData.litophaneWidth,
		guiData.xyAngle,
		guiData.zStartAngle,
		guiData.zEndAngle,
		guiData.maxThickness,
		guiData.minThickness
	);

	var geometry = theMesh.geometry;
	geometry.computeBoundingBox();
	geometry.attributes.position.needsUpdate = true;
	geometry.computeVertexNormals();
}

function lithophaneFunctionCylinderSphere(
	pointsX,
	pointsY,
	imageGrayValues,
	vertexBuffer,
	litophaneWidth,
	xyAngle,
	zStartAngle,
	zEndAngle,
	maxThickness,
	minThickness
) {
	var width = litophaneWidth;
	var width2 = width * 0.5;
	var aspect = image.height / image.width;
	var height = width * aspect;

	var axy = (xyAngle * Math.PI) / 180;
	var dAngleXY = axy / (pointsX - 1);
	var angleXY0 = -axy * 0.5;

	var curvatureXYRadius = 0;
	if (dAngleXY !== 0) {
		curvatureXYRadius = width2 / Math.sin(Math.min(Math.abs(angleXY0), Math.PI * 0.5));
	}

	var dAngleZ = ((zEndAngle - zStartAngle) * Math.PI) / 180 / (pointsY - 1);
	var angleZ0 = (zStartAngle * Math.PI) / 180;
	if (dAngleZ < 0) {
		angleZ0 = (zEndAngle * Math.PI) / 180;
		dAngleZ = -dAngleZ;
	}

	if (maxThickness < minThickness) {
		var temp = maxThickness;
		maxThickness = minThickness;
		minThickness = temp;
	}

	var innerCurvatureXYRadius = curvatureXYRadius - maxThickness;
	var dCurvatureXYRadius = maxThickness - minThickness;
	var minCurvatureXYRadius = curvatureXYRadius - dCurvatureXYRadius;

	var dy = height / (pointsY - 1);

	var p = 0;
	var pImg = 0;
	for (var plane = 0; plane < 2; plane++) {
		var angleZ = angleZ0 - Math.PI * 0.5;
		var y = 0;

		for (var j = 0; j < pointsY; j++) {
			var angleXY = angleXY0;

			for (var i = 0; i < pointsX; i++) {
				var x = 0;
				var z = 0;

				var r = 1;

				if (dAngleZ !== 0 && dAngleXY !== 0) {
					r *= Math.cos(angleZ);
				}

				if (plane === 0) {
					var grayValue = imageGrayValues[pImg++];

					r *= grayValue * dCurvatureXYRadius + minCurvatureXYRadius;
				} else {
					r *= innerCurvatureXYRadius;
				}

				if (dAngleXY !== 0) {
					x = Math.sin(angleXY) * r;
					z = Math.cos(angleXY) * r - curvatureXYRadius;

					angleXY += dAngleXY;
				} else {
					x = width * (i / pointsX - 0.5);
					z = r;
				}

				vertexBuffer[p++] = x;
				vertexBuffer[p++] = y;
				vertexBuffer[p++] = z;
			}

			angleZ += dAngleZ;
			y += dy;
		}
	}
}

function saveSTL(mesh) {
	var stlExporter = new STLExporterOptimized();

	var stlFileBytes = stlExporter.parse(mesh, { binary: true });

	var link = window.document.createElement('a');
	link.href = window.URL.createObjectURL(new Blob([stlFileBytes]), { type: 'model/stl' });
	link.download = 'Lithophane_' + imageName + '.stl';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

export { imageToMesh, saveSTL, updateMeshTexture, setUseTexture };
