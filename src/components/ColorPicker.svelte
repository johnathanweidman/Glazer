<script>
import ColorPicker from 'svelte-awesome-color-picker';
import * as Icon from 'svelte-heros-v2';

export let color = [null, null]
export let remove = ()=>{};
export let removable = true;
export let min = '1'
export let max = '25'


</script>

<div>
    {#if removable} 
        <button title="Remove" on:click={()=>remove(color)} ><Icon.Minus size="18" class="inline-flex" /></button>
    {/if}
    <ColorPicker bind:hex = {color[0]} nullable /><br>
    <label>Translucency: </label><br>
    <input type = 'number' bind:value = {color[1]}/><br>
    <label>layer: </label><br>
    <input type = 'number' min={min} max={max} value = {color[2]}/><br>
</div>


