<main>
  <Stack spaceUnit="6" class="container">
    <Text
      tag="h1"
      type="title"
      text="Log in"
      class="u-text-align:center"
    />
    <Stack tag="form" spaceUnit="6">
      <Vector vector="flash" />
      <Input
        name="Email"
        size={elementsHeightValue}
        placeholder="yourname@company.com"
      />
      <Input
        name="Password"
        type="password"
        size={elementsHeightValue}
        placeholder="Enter your password"
      />
      <Button size={elementsHeightValue} text="Log in" />
    </Stack>
  </Stack>
</main>
<Stack tag="aside" spaceUnit="6">
  <Text
    tag="h2"
    text="Settings"
    type="title-2"
  />
  <Select
    name="Border Radius"
    options={borderRadiusTokens}
    placeholder="Select border radius"
    on:change={updateBorderRadius}
  />
  <Select
    name="Elements height"
    options={elementsHeight}
    placeholder="Select elements height"
    on:change={updateHeight}
  />
</Stack>

<script lang="ts">
  import type { Token } from '@/types/types';
  import Vector from '@/components/01-atoms/Vector.svelte';
  import Text from '@/components/01-atoms/Text.svelte';
  import Stack from '@/components/01-atoms/Stack.svelte';
  import Button from '@/components/01-atoms/Button.svelte';
  import Input from '@/components/02-molecules/Input.svelte';
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
    const value = (e.detail as Token).value
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

  let elementsHeightValue = 'large';

  const updateHeight = (e: CustomEvent) => {
    const value = (e.detail as Token).value
    elementsHeightValue = value;
  }
</script>