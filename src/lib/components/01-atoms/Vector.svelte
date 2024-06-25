<div class="a-vector" style="color: var(--{color});">
  {#await file() then value}
    {@html value.default}
  {/await}
</div>

<script>
  export let vector = '';
  export let color = 'icon-default';
  // I need to better understand how dynamic
  // imports work. This works but what's
  // in Vite's doc doesn't: https://vitejs.dev/guide/features.html#dynamic-import
  let file = () => import(`@/assets/vectors/${vector}.svg?raw`);
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