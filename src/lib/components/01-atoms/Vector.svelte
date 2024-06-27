<div class="a-vector {className}" style="color: var(--{color}); width: var(--base-space-{width}); height: var(--base-space-{height});">
  {#await file() then value}
    {@html value.default}
  {/await}
</div>

<script lang="ts">
  export let glyph: string = '';
  export let color: string = 'icon-default';
  export let width: number | undefined =  undefined;
  export let height: number | undefined =  undefined;
  let className = '';
  export { className as class }
  // I need to better understand how dynamic
  // imports work. This works but what's
  // in Vite's doc doesn't: https://vitejs.dev/guide/features.html#dynamic-import
  let file = () => import(`@/assets/vectors/${glyph}.svg?raw`);
</script>

<style lang="scss">
  .a-vector {
    @include flex-absolute-center;
    flex-shrink: 0;
  }
  
  :global(.a-vector > svg) {
    width: var(--icon-width, var(--base-space-5));
    height: var(--icon-height, var(--base-space-5));
    fill: currentColor;
  }
</style>