<Stack tag="aside" spaceUnit="6">
  <Stack tag="section" spaceUnit="6">
    <Text
    tag="h2"
    text="Design Tokens"
    type="title-2"
    />
    <Text
      text="Tweak these design tokens and see their impact on the UI on the right 🪄"
    />
    <Text>
      Inspired by <a href="https://shaper.design">Shaper</a>.
    </Text>
  </Stack>
  <Stack tag="section" spaceUnit="6">
    <Select
      name="Border Radius"
      icon="radii"
      options={borderRadiusTokens}
      placeholder="Select border radius"
      on:change={updateBorderRadius}
    />
    <Select
      name="Elements height"
      icon="measurement"
      options={elementsHeight}
      placeholder="Select elements height"
      on:change={emitHeight}
    />
  </Stack>
</Stack>

<script lang="ts">
  import type { Token } from '@/types/types';
  import { createEventDispatcher } from "svelte";
  import Stack from '@/components/01-atoms/Stack.svelte';
  import Text from '@/components/01-atoms/Text.svelte';
  import Select from '@/components/02-molecules/Select.svelte';

  let style = getComputedStyle(document.body);
  let borderRadiusTokens: Token[] = [];

  Object.values(style).forEach(el => {
    if (el.includes('--border-radius-')) {
      borderRadiusTokens.push({
        name: el,
        value: style.getPropertyValue(el)
      });
    }
  });

  const updateBorderRadius = (e: CustomEvent) => {
    const value = (e.detail as Token).value;
    document.documentElement.style.setProperty('--border-radius', value);
  }

  let elementsHeight: Token[] = [
    {
      name: 'Small',
      value: 'small',
    },
    {
      name: 'Medium',
      value: 'medium',
    },
    {
      name: 'Large',
      value: 'large',
    },
  ];
  
  const dispatch = createEventDispatcher();

  const emitHeight = (e: CustomEvent) => {
    const value = (e.detail as Token).value;
    dispatch('update-height', value);
  }
</script>