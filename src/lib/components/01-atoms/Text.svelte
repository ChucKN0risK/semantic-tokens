{#if text}
  <svelte:element this={tag} {...$$restProps} class="a-text--{type} {className}" style:color={color ? `var(--${color})` : null}>
    {@html text}
  </svelte:element>
{/if}
{#if !text}
  <svelte:element this={tag} {...$$restProps} class="a-text--{type} {className}" style:color={color ? `var(--${color})` : null}>
    <slot />
  </svelte:element>
{/if}

<script>
  export let tag = 'p';
  export let type = 'body-m';
  export let color = 'text-high-emphasis';
  export let text = '';
  let className = '';
  export { className as class }
</script>

<style lang="scss">
  .a-text--body-s {
    @include text-body-s;
  }

  .a-text--body-m {
    @include text-body-m;
  }

  .a-text--body-l {
    @include text-body-l;
  }

  .a-text--title {
    @include text-title;
  }

  .a-text--title-2 {
    @include text-title-2;
  }
</style>