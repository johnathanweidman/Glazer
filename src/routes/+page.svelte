
<script>

    import P5 from 'p5-svelte';
    import mixbox from 'mixbox';
    import {imageToMesh, saveSTL } from '../lib/Litho.js';
    import ColorPicker from '../components/ColorPicker.svelte';
    import * as Icon from 'svelte-heros-v2';

    /**
	 * @type {string | ArrayBuffer | null}
	 */
    let currentFile = null;
    let redrawFn = ()=>{};
    let final = null;
    let base_color = ['black', 1];
    let thickness = 2;
    let layerHeight = .08;
    let use_gray = true;
    /**
		* @type {{ resize: (arg0: number, arg1: number) => void; loadPixels: () => void; width: number; height: any; pixels: any[]; } | null}
		*/
    let img = null;
    /**
		* @type {{ resize: (arg0: number, arg1: number) => void; loadPixels: () => void; pixels: string | any[]; updatePixels: () => void; canvas: any; } | null}
		*/
    let copy = null;
    let range = use_gray ? 255 : 360 // rgb vs hue ranges
    let final_w = 600 // scaling factor for images, use 2 or more if it takes too long to process
    let layer = 1
    let total = Date.now()
            /**
    /**
	 * @type {null}
	 */
    let mesh = null;
    let lithoSettings = {
     litophaneWidth: 100,
     thickness: 2,
     minThickness: .32
    }
    let layers = Math.round(lithoSettings.thickness/layerHeight);
    let subd = Number(range)/Number(layers)

    let colors = [
        ['red', .2, 4],
        ['yellow', .2 , 7],
        ['white', .8, 18],
    ]
    const remove = (/** @type {(string | number)[]} */ color) =>{
      colors = colors.filter((c)=> color !== c)
    }

    const addColor = ()=>{
      colors = [ ...colors, []];
    }

    $: {
        // @ts-ignore
        redrawFn(currentFile);
        layers = Math.round(thickness/layerHeight);
    }

    function handleInput(event) {
    const file = /** @type {HTMLInputElement} */ (event.target)?.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (!reader.result) return;
      currentFile = reader.result;
    };
     reader.readAsDataURL(file);
  }

      const sketch = (p5) => {
        let current_value = null;
        let orig_color = p5.color(base_color[0])
        let current_color = base_color



        let resetColors = () =>{
        orig_color = p5.color(base_color[0])
        current_color = base_color
        }


        p5.preload = () => {
            img = p5.loadImage(currentFile)
            copy = p5.loadImage(currentFile)
        }

        p5.setup = () => {
            if(img && copy){
              img.resize(final_w, 0);
              copy.resize(final_w, 0);
              img.loadPixels()
              copy.loadPixels()
            }

            p5.createCanvas(img.width*2 + 200, img.height, 'WEBGL');

        redrawFn = (/** @type {any} */ file) => {
          if(file){
            layer = 1;
            p5.blend(0, 0, final_w, img.height, 0, 0, final_w, img.height, 'REPLACE')
            resetColors();
            p5.redraw()
            p5.loop()
          }
        }
        }

        p5.draw = () => {
            if(layer <= layers) {
                let thresh = subd * (layer - 1) // threshold to change pixels\
                for( let i=0 ; i < copy.pixels.length; i+=4){
                    if (img?.pixels[i + 3] == 0) continue; // skip on transparent pixels for png files
                    
                    if (layer !== 1) { // the origin color for the color mix. After the first layer, it is the current image's color
                      orig_color = p5.color(copy?.pixels[i], copy?.pixels[i + 1], copy?.pixels[i + 2])
                    }
                    if (use_gray) {
                        current_value = (img?.pixels[i] + img?.pixels[i + 1] + img?.pixels[i + 2])/3
                    } else {
                        let c = p5.color(img?.pixels[i], img?.pixels[i + 1], img?.pixels[i + 2])
                        current_value = p5.hue(c)
                    }
                    if(current_value >= thresh){
                        current_color = colors.find(color => color[2] == layer) || current_color || base_color
                        let result = mixbox.lerp(orig_color.levels,  p5.color(current_color[0]).levels, current_color[1]) // color mix using mixbox for accurate pigment mixing results
                        // @ts-ignore
                        copy.pixels[i + 0] = result[0]
                        // @ts-ignore
                        copy.pixels[i + 1] = result[1]
                        // @ts-ignore
                        copy.pixels[i + 2] = result[2]
                    }
                }
                copy?.updatePixels()
                p5.image(copy, 0, 0)	
                p5.image(img, img.width + 20, 0)	
                layer++
            } else {
                console.log("Took:" + (Date.now() - total)/1000.0 + "s")
                final = copy.canvas;
                mesh = imageToMesh(final, lithoSettings)
                p5.noLoop()
                
            }
        }
	};
    
</script>

<style>
	@import url("https://unpkg.com/fluent-svelte/theme.css");
	
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
	}
</style>

<html lang='en'>
  <head>
    <title>Glazer</title>
  </head>
  <body>
        <br>
        <div class="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
              <!-- Page content here -->
              <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
            </div> 
            <div class="drawer-side">
              <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
              <ul class="menu p-4 w-120 min-h-full bg-base-200 text-base-content">
                <input on:change={handleInput} accept="image/png, image/jpeg" id="avatar" name="avatar" type="file" />
                <li><ColorPicker min={1} max={1} removable={false} bind:color= {base_color}></ColorPicker></li>
                {#each colors as color}
                    <li><ColorPicker min={'1'}, max={layers.toString()} {remove} bind:color= {color}></ColorPicker></li>
                {/each}
                <li>
                  <label class="label cursor-pointer">
                    <span class="label-text">Use Grey:</span> 
                    <input type="checkbox" class="toggle" bind:checked={use_gray} />
                  </label></li>
                <li><button title="Add" on:click={addColor} ><Icon.Plus size="18" class="inline-flex" />Add Color</button></li>
                <li><button on:click={redrawFn} class="btn">Redraw</button></li>
                <li><lable>Width: </lable><input bind:value={lithoSettings.litophaneWidth}></li>
                <li><lable>Maximum depth: </lable><input bind:value={lithoSettings.thickness}></li>
                <li><lable>Minimum depth: </lable><input bind:value={lithoSettings.minThickness}></li>
                <li><lable>layerHeight: </lable><input bind:value={layerHeight}></li>
                <li><lable>Layers: </lable><input disabled value={layers}></li>
                <li><button on:click={()=>saveSTL(mesh)} disabled = {!mesh} class="btn">download STL</button></li>
              </ul>
            </div>
          </div>
        {#if currentFile}
            <P5 {sketch} />
        {/if}
  </body>
</html>