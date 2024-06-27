<button
  {...$$restProps}
  class="
    m-button
    m-button--{look}
    m-button--{size}
    {contentCentered ? 'm-button--content-centered' : false}
  ">
  {#if icon}
    <Vector class="m-button__icon" glyph={icon} />
  {/if}
  <span class="m-button__text">
    {#if !text}
      <slot />
    {/if}
    {#if text}
      <span>{ text }</span>
    {/if}
  </span>
  {#if isLoading}
    <Vector
      class="m-button__icon is-rotating"
      glyph="loader"
      color={look === 'primary' ? 'icon-on-colored-bg' : 'icon-default'}
    />
  {/if}
</button>

<script lang="ts">
  import Vector from '@/components/01-atoms/Vector.svelte';

  export let look = 'primary';
  export let size = 'medium';
  export let text: string = '';
  export let icon: string = '';
  export let isLoading: boolean = false;
  export let contentCentered = true;
</script>

<style lang="scss">
  :root {
    --button-border-color: var(
      --base-form-element-border-color-default,
      var(--border-component-lightest-border)
    );
    --button-border: inset 0px 0px 0px 1px var(--button-border-color);
    --button-box-shadow-active: inset 0 1px 3px 0 rgba(0, 0, 0, 0.32);
    --button-border-radius: var(--base-cta-border-radius);
    --button-side-padding: var(--base-space-3);
    --button-icon-size: var(--base-space-5);
  }

  .m-button {
    display: inline-flex;
    align-items: center;
    height: var(--button-height);
    padding-left: var(--button-side-padding);
    padding-right: var(--button-side-padding);
    color: inherit;
    text-decoration: none;
    border-radius: var(--button-border-radius);
    @include transition((color, width, height, background-color));
    will-change: background-color;
    cursor: pointer;
    gap: var(--base-space-2);

    &:not(:focus):not(.m-button--text):not(.m-button--icon):not(.m-button--warning) {
      box-shadow: var(--shadow-button-default);
    }

    // Prevent all button child to capture
    // click event
    & > * {
      pointer-events: none;
    }

    svg {
      vertical-align: middle;
      fill: currentColor;
    }

    &[disabled] {
      cursor: not-allowed;
    }

    &:active {
      box-shadow: var(--shadow-button-active);
    }
  }

  .m-button__icon {
    @include size(var(--button-icon-size));
  }

  .m-button__text {
    color: inherit;
    text-decoration: none;
    @include text-body-l;

    &:empty {
      display: none;
    }
  }

  // ---------------------------
  // THEMES
  // ---------------------------
  .m-button--primary {
    --background-color: var(--background-button-primary-default);
    --border-color: var(--border-button-primary-default);
    --text-color: var(--text-on-colored-bg);

    color: var(--text-color);
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);

    svg {
      fill: currentColor;
    }

    &[disabled] {
      --text-color: rgba(255, 255, 255, 0.5);
    }

    &:hover:not([disabled]) {
      --background-color: var(--background-button-primary-hover);
    }

    &:active {
      --background-color: var(--global-app-violet-light);
    }

    &:focus {
      --border-color: var(--border-button-primary-focused);
      box-shadow: var(--base-form-element-shadow-focused);
    }
  }

  .m-button--secondary {
    --background-color: var(--background-button-secondary-default);
    --border-color: var(--border-button-secondary-default);
    --text-color: var(--text-high-emphasis);

    color: var(--text-color);
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);

    svg {
      fill: currentColor;
    }

    &[disabled] {
      --text-color: var(--text-low-emphasis);
      --background-color: var(--background-button-secondary-hover);
    }

    &:hover {
      --background-color: var(--background-button-secondary-hover);
    }

    &:focus {
      box-shadow: 0px 0px 0px 3px var(--border-button-secondary-default);
    }

    .m-button__text {
      @include text-body-m;
    }
  }

  .m-button--destructive {
    --background-color: var(--background-button-destructive-default);
    --border-color: var(--border-button-destructive-default);
    --text-color: var(--text-on-colored-bg);

    color: var(--text-color);
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);

    svg {
      fill: currentColor;
    }

    &[disabled] {
      --text-color: rgba(255, 255, 255, 0.5);
    }

    &:hover {
      --background-color: var(--background-button-destructive-hover);
    }

    &:active {
      --background-color: var(--background-button-destructive-active);
    }

    &:focus {
      box-shadow: 0px 0px 0px 3px var(--border-button-destructive-focused);
    }
  }

  // ---------------------------
  // SIZES
  // ---------------------------
  .m-button--small {
    --button-height: var(--base-space-7);
  }

  .m-button--medium {
    --button-height: var(--base-space-8);
  }

  .m-button--large {
    --button-height: var(--base-space-10);
  }

  .m-button--content-centered {
    display: flex;
    justify-content: center;
  }
</style>
