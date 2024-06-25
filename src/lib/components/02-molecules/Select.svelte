<Stack
  class="m-select"
  spaceUnit="2"
  axis="y"
>
  <Text
    tag={'label'}
    text={name}
    for={kebabcasify(name)}
  />
  <select
    id={kebabcasify(name)}
    name={name}
    class="m-select__selector"
    on:change={emitSelectedOption}
  >
    <option value="" disabled selected>{placeholder}</option>
    {#each options as option}
      <option value="{option.value}">{option.name}</option>
    {/each}
  </select>
</Stack>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Token } from '@/types/types';
  import Text from '@/components/01-atoms/Text.svelte';
  import Stack from '@/components/01-atoms/Stack.svelte';
  import { kebabcasify } from '@/utils/kebabcasify';

  export let name = '';
  export let placeholder = '';
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
  :root {
    --select-border-color: var(
      --base-form-element-border-color-default,
      var(--border-component-lightest-border)
    );
    --select-border-radius: var(--base-cta-border-radius, var(--border-radius));
    --select-side-padding: var(--base-form-element-side-padding, var(--base-space-2));
    --select-height: var(--base-cta-height);
  }

  .m-select__selector {
    height: var(--select-height);
    padding-left: var(--select-side-padding);
    border: 1px solid var(--select-border-color);
    border-radius: var(--select-border-radius);
    background-color: var(--select-background-color);
    color: var(--text-high-emphasis);
    box-shadow: var(--select-box-shadow);
    @include text-body-s;

    &:focus {
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
</style>