<script>
	import ColorPicker from './ColorPicker.svelte';
	import * as Icon from 'svelte-heros-v2';

	export let base_color;
	export let colors;
	export let use_gray;
	export let lithoSettings;
	export let layerHeight;
	export let layers;
	export let mesh;
	export let lithophaneMode = false;

	export let handleInput;
	export let addColor;
	export let redrawFn;
	export let saveSTL;
	export let remove;
	export let save;
	export let load;
	export let currentFileName;
	export let saveName;
</script>

<div class="p-4 space-y-4">
	<div class="form-control">
		<label class="label">
			<span class="label-text">Image File</span>
		</label>
		<input
			on:change={handleInput}
			accept="image/png, image/jpeg"
			type="file"
			class="file-input file-input-bordered w-full"
		/>
		{#if currentFileName}
			<span class="label-text-alt">Loaded: {currentFileName}</span>
		{/if}
	</div>

	<div class="divider">File</div>

	<div class="form-control">
		<label class="label">
			<span class="label-text">Project Name</span>
		</label>
		<input bind:value={saveName} type="text" class="input input-bordered w-full" />
	</div>
	<div class="divider">Colors</div>

	<div class="form-control">
		<ColorPicker
			label="Base Color"
			min={0}
			max={0}
			removable={false}
			bind:color={base_color}
			disabled={true}
		></ColorPicker>
	</div>

	{#if !lithophaneMode}
		{#each colors as color, i}
			<div class="form-control">
				<ColorPicker
					label={'Color ' + (i + 1)}
					min={'1'}
					max={layers.toString()}
					{remove}
					bind:color
				></ColorPicker>
			</div>
		{/each}

		<button title="Add" on:click={addColor} class="btn btn-outline btn-primary btn-sm w-full">
			<Icon.Plus size="18" class="inline-flex mr-2" />

			Add Color
		</button>
	{/if}

	<div class="divider">Settings</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Use Grayscale</span>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={use_gray} />
		</label>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Lithophane Mode</span>
			<input
				type="checkbox"
				class="toggle toggle-primary"
				bind:checked={lithoSettings.lithophaneMode}
			/>
		</label>
	</div>

	<div class="divider">Dimensions</div>

	<div class="form-control">
		<label class="label">
			<span class="label-text">Width (mm)</span>
		</label>
		<input
			bind:value={lithoSettings.litophaneWidth}
			type="number"
			class="input input-bordered w-full"
		/>
	</div>

	<div class="form-control">
		<label class="label">
			<span class="label-text">Max Thickness (mm)</span>
		</label>
		<input bind:value={lithoSettings.thickness} type="number" class="input input-bordered w-full" />
	</div>

	<div class="form-control">
		<label class="label">
			<span class="label-text">Min Thickness (mm)</span>
		</label>
		<input
			bind:value={lithoSettings.minThickness}
			type="number"
			class="input input-bordered w-full"
		/>
	</div>

	<div class="form-control">
		<label class="label">
			<span class="label-text">Layer Height (mm)</span>
		</label>
		<input bind:value={layerHeight} type="number" class="input input-bordered w-full" />
	</div>

	<div class="form-control">
		<label class="label">
			<span class="label-text">Layers</span>
		</label>
		<input disabled value={layers} class="input input-bordered w-full" />
	</div>

	<div class="divider"></div>
	<button on:click={save} class="btn btn-primary w-full">Save</button>
	<button on:click={load} class="btn btn-secondary w-full">Load</button>
	<button on:click={redrawFn} class="btn btn-primary w-full">Redraw</button>
	<button on:click={() => saveSTL(mesh)} disabled={!mesh} class="btn btn-secondary w-full"
		>Download STL</button
	>
</div>
