<Stack
  class="m-input m-input--{size} {className}"
  {...$$restProps}
  spaceUnit="2"
  axis="y"
>
  <input
    id={kebabcasify(name)}
    type={type}
    placeholder={placeholder}
    on:input={emitValue}
  />
</Stack>

<script lang="ts">
  import Stack from '@/components/01-atoms/Stack.svelte';
  import { kebabcasify } from '@/utils/kebabcasify';
  import { createEventDispatcher } from 'svelte';

  export let name = '';
  export let size = 'medium';
  export let type = 'text';
  export let placeholder = 'text';
  let className = '';
  export { className as class }

  const dispatch = createEventDispatcher();

  function emitValue(e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    if (!value) return;
    console.log(value)
    dispatch('value-change', value);
  }
</script>

<style lang="scss">
  :root {
    --shadow-input-default: 0px 1px 2px rgba(21, 29, 40, 0.03);
    --shadow-input-hover: 0px 2px 4px rgba(21, 29, 40, 0.04);
  }

  // I wish I hadn't have to use :global but
  // it's the only way to make the m-input
  // class usable within this component
  :global(.m-input) {
    --input-background-color: var(
      --base-form-element-background-color-default,
      var(--background-component-input)
    );
    --input-border-color: var(
      --base-form-element-border-color-default,
      var(--border-component-lightest-border)
    );
    --input-border-radius: var(--base-cta-border-radius, var(--border-radius));
    --input-side-padding: var(--base-form-element-side-padding, var(--base-space-2));
    --input-height: var(--base-cta-height);
    --input-box-shadow: var(--shadow-input-default);
    --input-text-color: var(--text-high-emphasis);

    & input {
      display: flex;
      align-items: center;
      width: 100%;
      height: var(--input-height);
      padding-left: var(--input-side-padding);
      padding-right: var(--input-side-padding);
      background-color: var(--input-background-color);
      border-radius: var(--input-border-radius);
      border: var(--border-width) solid var(--input-border-color);
      box-shadow: var(--input-box-shadow);
      @include text-body-s;
      color: var(--input-text-color);
    }

    @include placeholder() {
      color: var(--text-low-emphasis);
    }

    &:hover {
      --input-box-shadow: var(--shadow-input-hover);
    }

    &:focus-within {
      --input-border-color: var(--base-form-element-border-color-focus);
      --input-box-shadow: var(--base-form-element-shadow-focused);
    }

    // &.has-message--error {
    //   --input-border-color: var(--border-component-error);

    //   &:focus-within {
    //     --input-box-shadow: var(--base-form-element-shadow-focused-destructive);
    //   }
    // }

    // &:not(.has-icon-on-right):not(.has-text-prefix) {
    //   & > * + * {
    //     margin-left: var(--base-space-2);
    //   }
    // }
  }

  :global(.m-input:not(:placeholder-shown).has-message--error) {
    --input-border-color: var(--border-component-error);
    &:focus-within {
      --input-box-shadow: var(--base-form-element-shadow-focused-destructive);
    }
  }

  :global(.m-input.has-icon-on-right) {
    .m-sp-input__icon {
      order: 1;
      margin-left: auto;
    }
  }

  // ---------------------------
  // SIZES
  // ---------------------------
  :global(.m-input--small) {
    --input-height: var(--base-space-7);
  }

  :global(.m-input--medium) {
    --input-height: var(--base-space-8);
  }

  :global(.m-input--large) {
    --input-height: var(--base-space-10);
  }
</style>