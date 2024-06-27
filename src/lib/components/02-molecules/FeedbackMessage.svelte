<Stack
  spaceUnit="1"
  axis="x"
  class="m-feedback-message"
>
  <Vector glyph={icon} color="icon-{message.type}" />
  <Text
    tag="span"
    text={message.text}
    type="body-m"
    color="text-{message.type}"
  />
</Stack>

<script lang="ts">
  import type { FeedbackMessageType } from '@/types/types';
  import Text from '@/components/01-atoms/Text.svelte';
  import Stack from '@/components/01-atoms/Stack.svelte';
  import Vector from '@/components/01-atoms/Vector.svelte';
  
  export let message: FeedbackMessageType;
  export let icon: string = 'alert-circled';
</script>