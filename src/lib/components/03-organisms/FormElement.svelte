<Stack
  tag="fieldset"
  class="o-form-element"
  spaceUnit="2"
>
  <div class="m-form-element__label">
    <Text
      tag={'label'}
      text={name}
      for={kebabcasify(name)}
    />
    <slot name="label-action"></slot>
  </div>
  {#if hasMessage}
    <FeedbackMessage message={message} />
  {/if}
  <svelte:component
    this={component}
    {...$$restProps}
    class="m-form-element__field {hasMessage && message.type === 'error' ? 'has-message--error' : null}"
    on:value-change
  />
</Stack>

<script lang="ts">
  import type { FeedbackMessageType } from '@/types/types';
  import Stack from '@/components/01-atoms/Stack.svelte';
  import Text from '@/components/01-atoms/Text.svelte';
  import FeedbackMessage from '@/components/02-molecules/FeedbackMessage.svelte';
  import { kebabcasify } from '@/utils/kebabcasify';
  
  export let name: string;
  export let hasMessage: boolean;
  export let message: FeedbackMessageType = {
    text: '',
    type: 'error'
  };
  export let component;
</script>

<style lang="scss">
  .m-form-element__label {
    display: flex;
    justify-content: space-between;
  }
</style>