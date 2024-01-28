<script>
import ColorPicker from 'svelte-awesome-color-picker';

export let color = [null, null]
export let min;
export let max 

$: console.log(color);

</script>

<div>
    <ColorPicker bind:hex = {color[0]} nullable />
    <input type = 'number' bind:value = {color[1]}/>
    <input type = 'number' {min} {max} bind:value = {color[2]}/>
</div>


