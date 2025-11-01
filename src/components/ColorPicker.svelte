<script>
	import ColorPicker from 'svelte-awesome-color-picker';
	import * as Icon from 'svelte-heros-v2';

	export let color = [null, null];
	export let remove = () => {};
	export let removable = true;
	export let min = '1';
    export let max = '25';
    export let disabled = false;
    export let label = '';
</script>

<div class="card bg-base-100 shadow-xl">
    <div class="card-body p-2">
        <div class="form-control">
            <label class="label-text text-xs flex justify-between items-center">
                <span>Color</span>
                {#if removable}
                    <div class="card-actions">
                        <button title="Remove" on:click={() => remove(color)} class="btn btn-square btn-xs">
                            <Icon.Minus size="16" />
                        </button>
                    </div>
                {/if}
            </label>
            <ColorPicker bind:hex={color[0]} nullable />
        </div>
        <div class="form-control">
            <label class="label-text text-xs">Translucency</label>
            <input type="number" placeholder="" bind:value={color[1]} class="input input-bordered input-sm" />
        </div>
        <div class="form-control">
            <label class="label-text text-xs">Layer</label>
            <input type="number" placeholder="" min={min} max={max} bind:value={color[2]} disabled={disabled} class="input input-bordered input-sm" />
        </div>
	</div>
</div>
