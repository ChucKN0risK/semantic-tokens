<svelte:element this={tag} class="a-stack {className} {axis === 'y' ? 'a-stack--vertical' : 'a-stack--horizontal'}" style="--space: var(--base-space-{spaceUnit})">
  <slot />
</svelte:element>

<script>
  export let tag = 'div';
  export let spaceUnit = '2';
  export let axis = 'y';
  let className = '';
  export { className as class }
</script>

<style>
  .a-stack {
    display: flex;
    gap: var(--space);
  }

  .a-stack--vertical {
    flex-direction: column;
  }
</style>