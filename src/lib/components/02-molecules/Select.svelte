<Stack
  class="m-select m-select--{size}"
  spaceUnit="2"
  axis="y"
>
{#if icon}
  <Stack spaceUnit="2" axis="x">
    <Vector glyph={icon} />
    <Text
      tag={'label'}
      text={name}
      for={kebabcasify(name)}
    />
  </Stack>
  {/if}
  {#if !icon}
    <Text
      tag={'label'}
      text={name}
      for={kebabcasify(name)}
    />
  {/if}
  <div class="m-select__selector">
    <select
      id={kebabcasify(name)}
      name={name}
      on:change={emitSelectedOption}
    >
      <option value="" disabled selected>{placeholder}</option>
      {#each options as option}
        <option value="{option.value}">{option.name}</option>
      {/each}
    </select>
    <div class="m-select__selector__icon">
      <Vector glyph="chevron-down" />
    </div>
  </div>
</Stack>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Token } from '@/types/types';
  import Vector from '@/components/01-atoms/Vector.svelte';
  import Text from '@/components/01-atoms/Text.svelte';
  import Stack from '@/components/01-atoms/Stack.svelte';
  import { kebabcasify } from '@/utils/kebabcasify';

  export let name = '';
  export let size: 'small' | 'medium' | 'large' = 'large';
  export let placeholder = '';
  export let icon = '';
  export let options: Token[] = [];

  const dispatch = createEventDispatcher();

  function emitSelectedOption(e: Event) {
    const value = (e.target as HTMLSelectElement).value
    if (!value) return;
    const selectedOption = options.find(el => el.value === value);
    dispatch('change', selectedOption);
  }
</script>

<style lang="scss">
  :global(.m-select) {
    --select-border-color: var(
      --base-form-element-border-color-default,
      var(--border-component-lightest-border)
    );
    --select-border-radius: var(--base-cta-border-radius, var(--border-radius));
    --select-side-padding: var(--base-form-element-side-padding, var(--base-space-2));
    --select-height: var(--base-cta-height);
  }

  .m-select__selector {
    position: relative;
    height: var(--select-height);
    padding-left: var(--select-side-padding);
    border: 1px solid var(--select-border-color);
    border-radius: var(--select-border-radius);
    color: var(--text-high-emphasis);
    box-shadow: var(--select-box-shadow);
    @include text-body-s;

    &:focus-within {
      --select-border-color: var(
        --base-form-element-border-color-focus,
        var(--border-component-active)
      );
      --select-box-shadow: var(--base-form-element-shadow-focused);
    }

    &:hover {
      --select-box-shadow: var(--shadow-input-hover);
    }
  }

  .m-select__selector select {
    @include size(100%);
    padding-right: var(--base-space-9);
    border-radius: inherit;
    background-color: var(--select-background-color);
    padding-left: 0;
  }

  .m-select__selector__icon {
    position: absolute;
    top: 50%;
    transform: translateY((-50%));
    right: var(--base-space-2);
    pointer-events: none;
  }

  .m-select option {
    background-color: var(--select-background-color);
    color: var(--text-high-emphasis);
  }

  // ---------------------------
  // SIZES
  // ---------------------------
  :global(.m-select--small) {
    --select-height: var(--base-space-7);
  }

  :global(.m-select--medium) {
    --select-height: var(--base-space-8);
  }

  :global(.m-select--large) {
    --select-height: var(--base-space-10);
  }
</style>