<script>
	import P5 from 'p5-svelte';
	import mixbox from 'mixbox';
	import { imageToMesh, saveSTL, updateMeshTexture, setUseTexture } from '../lib/Litho.js';
	import * as THREE from '../lib/three/three.module.js';
	import Viewer from '../components/Viewer.svelte';
	import Settings from '../components/Settings.svelte';

	let isLoading = false;
	let currentFile = null;
	let currentFileName = null;
	let saveName = 'glazer-state';
	let redrawFn = () => {};
	let final = null;
	let base_color = ['#000000', 1, 0];
	let thickness = 2;
	let layerHeight = 0.08;
	let use_gray = true;
	let img = null;
	let copy = null;
	let range = use_gray ? 255 : 360;
	let final_w = 600;
	let layer = 1;
	let total = Date.now();
	let mesh = null;
	let lithoSettings = {
		litophaneWidth: 100,
		thickness: 2,
		minThickness: 0.32,
		lithophaneMode: false
	};
	let layers = Math.round(lithoSettings.thickness / layerHeight);
	let subd = Number(range) / Number(layers);

	let colors = [
		['red', 0.2, 4],
		['yellow', 0.2, 7],
		['white', 0.8, 18]
	];

	const remove = (color) => {
		colors = colors.filter((c) => c !== color);
	};

	const addColor = () => {
		colors = [...colors, []];
	};

	function saveState() {
		const state = {
			base_color,
			colors,
			use_gray,
			lithoSettings,
			layerHeight,
			currentFile,
			currentFileName
		};
		const blob = new Blob([JSON.stringify(state)], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${saveName}.json`;
		console.log('Attempting to download file:', a.download);
		document.body.appendChild(a); // Appending to body
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	function loadState() {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = '.json';
		input.onchange = (e) => {
			const file = e.target.files[0];
			if (!file) return;

			const reader = new FileReader();
			reader.onload = (e) => {
				const state = JSON.parse(e.target.result);
				base_color = state.base_color;
				colors = state.colors;
				use_gray = state.use_gray;
				lithoSettings = state.lithoSettings;
				layerHeight = state.layerHeight;
				currentFile = state.currentFile;
				currentFileName = state.currentFileName;
				saveName = file.name.replace(/\.json$/, '');
				redrawFn(currentFile);
			};
			reader.readAsText(file);
		};
		input.click();
	}

	$: {
		redrawFn(currentFile);
		layers = Math.round(thickness / layerHeight);
	}

	function handleInput(event) {
		const file = event.target?.files?.[0];
		if (!file) {
			return;
		}

		const reader = new FileReader();
		reader.onloadend = () => {
			if (!reader.result) return;
			currentFile = reader.result;
			currentFileName = file.name;
		};
		reader.readAsDataURL(file);
	}

	const sketch = (p5) => {
		let current_value = null;
		let orig_color = p5.color(base_color[0]);
		let current_color = base_color;

		let resetColors = () => {
			orig_color = p5.color(base_color[0]);
			current_color = base_color;
		};

		function removeImageBackground(imageToProcess, targetColor, colorTolerance) {
			imageToProcess.loadPixels(); // Load the pixel data of the image

			for (let i = 0; i < imageToProcess.pixels.length; i += 4) {
				let r = imageToProcess.pixels[i]; // Red component
				let g = imageToProcess.pixels[i + 1]; // Green component
				let b = imageToProcess.pixels[i + 2]; // Blue component

				// Calculate the distance between the current pixel color and the target color
				let d = p5.dist(r, g, b, targetColor[0], targetColor[1], targetColor[2]);

				// If the color is within the tolerance, make it transparent
				if (d < colorTolerance) {
					imageToProcess.pixels[i] = 0;
					imageToProcess.pixels[i + 1] = 0;
					imageToProcess.pixels[i + 2] = 0;
					imageToProcess.pixels[i + 3] = 255; // Set alpha to 255 (fully opaque)
				}
			}
			imageToProcess.updatePixels(); // Apply the changes to the image
		}

		p5.preload = () => {
			img = p5.loadImage(currentFile);
			copy = p5.loadImage(currentFile);
		};

		p5.setup = () => {
			if (img && copy) {
				img.resize(final_w, 0);
				copy.resize(final_w, 0);
				if (lithoSettings.lithophaneMode) {
					img.loadPixels();
					const backgroundColor = [img.pixels[0], img.pixels[1], img.pixels[2]];

					removeImageBackground(img, backgroundColor, 30);
					removeImageBackground(copy, backgroundColor, 30);

					img.filter(p5.INVERT);
					copy.filter(p5.INVERT);
				}
				img.loadPixels();
				copy.loadPixels();
			}

			p5.createCanvas(img.width, img.height);

			redrawFn = (file) => {
				if (file) {
					isLoading = true;
					layer = 1;
					p5.blend(0, 0, final_w, img.height, 0, 0, final_w, img.height, 'REPLACE');
					resetColors();
					p5.redraw();
					p5.loop();
				}
			};
		};

		p5.draw = () => {
			if (layer <= layers) {
				let thresh = subd * (layer - 1);
				for (let i = 0; i < copy.pixels.length; i += 4) {
					if (img?.pixels[i + 3] == 0) continue;

					if (layer !== 1) {
						orig_color = p5.color(copy?.pixels[i], copy?.pixels[i + 1], copy?.pixels[i + 2]);
					}
					if (use_gray) {
						current_value = (img?.pixels[i] + img?.pixels[i + 1] + img?.pixels[i + 2]) / 3;
					} else {
						let c = p5.color(img?.pixels[i], img?.pixels[i + 1], img?.pixels[i + 2]);
						current_value = p5.hue(c);
					}
					if (current_value >= thresh) {
						if (lithoSettings.lithophaneMode) {
							current_color = base_color;
						} else {
							current_color =
								colors.find((color) => color[2] == layer) || current_color || base_color;
						}
						let result = mixbox.lerp(
							orig_color.levels,
							p5.color(current_color[0]).levels,
							1 - current_color[1] / 100
						);
						copy.pixels[i + 0] = result[0];
						copy.pixels[i + 1] = result[1];
						copy.pixels[i + 2] = result[2];
					}
				}
				copy?.updatePixels();
				p5.image(copy, 0, 0);
				layer++;
			} else {
				console.log('Took:' + (Date.now() - total) / 1000.0 + 's');
				final = copy.canvas;
				mesh = imageToMesh(final, lithoSettings);
				if (mesh) {
					setUseTexture(!lithoSettings.lithophaneMode);
					if (!lithoSettings.lithophaneMode) {
						const texture = new THREE.CanvasTexture(final);
						updateMeshTexture(texture);
					}
				}
				p5.noLoop();
				isLoading = false;
			}
		};
	};
</script>

<div class="flex flex-col h-screen">
	<header class="navbar bg-base-100 shadow-md">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Glazer</a>
		</div>
	</header>

	<div class="flex flex-1 overflow-hidden">
		<aside class="w-1/4 h-full overflow-y-auto bg-base-200">
			<Settings
				bind:base_color
				bind:colors
				bind:use_gray
				bind:lithoSettings
				bind:layerHeight
				bind:layers
				{mesh}
				{handleInput}
				{addColor}
				{redrawFn}
				{saveSTL}
				{remove}
				save={saveState}
				load={loadState}
				lithophaneMode={lithoSettings.lithophaneMode}
				{currentFileName}
				bind:saveName
			/>
		</aside>

		<main class="flex-1 h-full">
			{#if currentFile}
				<div>
					<P5 {sketch} />
				</div>
				<div class="w-full h-full relative">
					{#if isLoading}
						<div
							class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
						>
							<span class="loading loading-spinner loading-lg"></span>
						</div>
					{/if}
					<Viewer {mesh} lithophaneMode={lithoSettings.lithophaneMode} />
				</div>
			{:else}
				<div class="flex h-full justify-center items-center">
					<div class="text-center">
						<h2 class="text-2xl font-bold mb-4">Welcome to Glazer</h2>
						<p>Select an image to begin.</p>
					</div>
				</div>
			{/if}
		</main>
	</div>
</div>
