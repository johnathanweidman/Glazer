<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from '../lib/three/three.module.js';
	import { OrbitControls } from '../lib/three/controls/OrbitControls.js';

	/**
	 * @type {THREE.Mesh | null} The 3D mesh to be displayed in the viewer.
	 * This prop is reactive, and when it changes, the viewer updates to show the new mesh.
	 */
	export let mesh = null;

	/**
	 * Resets the camera view to intelligently frame the currently loaded mesh.
	 * It calculates the bounding box of the mesh and adjusts the camera's position and target
	 * to fit the entire model within the viewport.
	 */
	function resetView() {
		if (controls && mesh) {
			// Calculate the bounding box of the mesh
			const box = new THREE.Box3().setFromObject(mesh);
			const size = box.getSize(new THREE.Vector3());
			const center = box.getCenter(new THREE.Vector3());

			// Determine the maximum dimension of the object
			const maxSize = Math.max(size.x, size.y, size.z);
			console.log(maxSize);

			// Calculate the distance needed to fit the object based on camera's FOV and aspect ratio
			const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));
			const fitWidthDistance = fitHeightDistance / camera.aspect;
			const distance = Math.max(fitHeightDistance, fitWidthDistance); // Add some padding (1.2)

			// Calculate the direction vector from camera to target
			const direction = controls.target
				.clone()
				.sub(camera.position)
				.normalize()
				.multiplyScalar(distance);

			// Update OrbitControls properties
			controls.maxDistance = distance * 10; // Allow zooming out further
			controls.target.copy(center); // Set controls target to the center of the object

			// Adjust camera clipping planes based on distance
			camera.near = distance / 100;
			camera.far = distance * 100;
			camera.updateProjectionMatrix();

			// Set camera position to frame the object
			camera.position.copy(controls.target).sub(direction);

			// Update controls to apply changes
			controls.update();
		}
	}

	// Three.js related variables
	let container; // DOM element to attach the renderer to
	let renderer, scene, camera, controls; // Three.js core components
	let resizeObserver; // Observer to handle container resizing

	/**
	 * Svelte lifecycle hook: Called once after the component is first rendered to the DOM.
	 * Initializes the Three.js scene, camera, renderer, and controls.
	 */ onMount(() => {
		// 1. Scene Setup
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0xeeeeee); // Light gray background

		// 2. Camera Setup
		camera = new THREE.PerspectiveCamera(
			40, // Field of view
			container.clientWidth / container.clientHeight, // Aspect ratio
			0.1, // Near clipping plane
			1000 // Far clipping plane
		);
		camera.position.z = 60; // Initial camera position (will be adjusted by resetView)

		// 3. Renderer Setup
		renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable anti-aliasing
		renderer.setSize(container.clientWidth, container.clientHeight); // Set renderer size to container size
		container.appendChild(renderer.domElement); // Add renderer's canvas to the DOM

		// 4. OrbitControls Setup (for interactive camera movement)
		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true; // Enable smooth camera movement

		// 5. Lighting Setup
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light everywhere
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Directional light (like sunlight)
		directionalLight.position.set(0, 1, 1); // Position the light
		scene.add(directionalLight);

		/**
		 * Animation loop for rendering the scene and updating controls.
		 * Uses requestAnimationFrame for efficient rendering.
		 */
		const animate = () => {
			requestAnimationFrame(animate);
			controls.update(); // Only required if controls.enableDamping or controls.autoRotate are set to true
			renderer.render(scene, camera); // Render the scene with the camera
		};

		animate(); // Start the animation loop

		// 6. Resize Observer Setup
		// Updates renderer and camera aspect ratio when the container resizes
		resizeObserver = new ResizeObserver(() => {
			if (container && renderer && camera) {
				const width = container.clientWidth;
				const height = container.clientHeight;
				renderer.setSize(width, height);
				camera.aspect = width / height;
				camera.updateProjectionMatrix(); // Update camera's projection matrix after aspect ratio change
			}
		});

		resizeObserver.observe(container); // Start observing the container for size changes

		/**
		 * Svelte lifecycle hook: Cleanup function called when the component is destroyed.
		 * Disposes of the renderer and disconnects the resize observer to prevent memory leaks.
		 */
		return () => {
			renderer.dispose(); // Release WebGL resources
			resizeObserver.disconnect(); // Stop observing
		};
	});

	/**
	 * Svelte reactive declaration: Runs whenever `scene` or `mesh` changes.
	 * This block is responsible for adding/removing the 3D mesh from the scene
	 * and calling `resetView` to frame the new mesh.
	 */
	$: {
		if (scene && mesh) {
			// Remove existing meshes from the scene to prevent duplicates
			scene.children.forEach((child) => {
				if (child.isMesh) {
					scene.remove(child);
				}
			});
			scene.add(mesh); // Add the new mesh to the scene
			resetView(); // Frame the new mesh in the view
		}
	}
</script>

<!-- Main container for the 3D viewer -->
<div bind:this={container} style="position: relative; width: 100%; height: 100%;">
	<!-- Button to reset the camera view -->
	<button
		on:click={resetView}
		style="position: absolute; top: 10px; right: 10px; z-index: 1;"
		class="btn">Reset View</button
	>
</div>
