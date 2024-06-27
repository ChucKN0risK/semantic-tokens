<main>
  <Stack spaceUnit="6" class="container">
    <Vector glyph="sign-in" />
    <Text
      tag="h1"
      type="title-2"
      text="Sign in with your work email"
      class="u-text-align:center"
    />
    <form on:submit|preventDefault={login}>
      <Stack spaceUnit="6">
        <Stack spaceUnit="2">
          <Button
            size={elementsHeightValue}
            text="Log in with Google"
            look="secondary"
            icon="google"
          />
          <Button
            size={elementsHeightValue}
            text="Continue with SAML SSO"
            look="secondary"
            icon="lock"
          />
        </Stack>
        <FormElement
          component={Input}
          name="Email"
          type="email"
          size={elementsHeightValue}
          placeholder="yourname@company.com"
          hasMessage={displayEmailErrorMessage}
          message="{{
            type: 'error',
            text: 'Please enter your email',
          }}"
          on:value-change={updateEmail}
        />
        <FormElement
          component={Input}
          name="Password"
          type="password"
          size={elementsHeightValue}
          placeholder="Enter your password"
          hasMessage={displayPasswordErrorMessage}
          message="{{
            type: 'error',
            text: 'Please enter your password',
          }}"
          on:value-change={updatePassword}
        >
          <a
            href="#"
            slot="label-action"
            tabindex="0"
          >
            Forgot password?
          </a>
        </FormElement>
        <Button
          size={elementsHeightValue}
          text="Log in"
          type="submit"
          isLoading={isLoging}
        />
      </Stack>
    </form>
  </Stack>
</main>
<SettingsPanel
  on:update-height={updateHeight}
/>

<script lang="ts">
  import Vector from '@/components/01-atoms/Vector.svelte';
  import Text from '@/components/01-atoms/Text.svelte';
  import Stack from '@/components/01-atoms/Stack.svelte';
  import Button from '@/components/01-atoms/Button.svelte';
  import Input from '@/components/02-molecules/Input.svelte';
  import FormElement from '@/components/03-organisms/FormElement.svelte';
  import SettingsPanel from '@/components/04-layouts/SettingsPanel.svelte';

  let displayEmailErrorMessage: boolean = false;
  let displayPasswordErrorMessage: boolean = false;
  let email: string = '';
  let password: string = '';
  let isLoging = false;
  
  let elementsHeightValue = 'large';
  const updateHeight = (e: CustomEvent) => {
    elementsHeightValue = e.detail;
  }

  const updateEmail = (e: CustomEvent) => {
    const value = e.detail;
    if (!value) return;
    email = value;
  }

  const updatePassword = (e: CustomEvent) => {
    const value = e.detail;
    if (!value) return;
    password = value;
  }

  const login = () => {
    if (email === '') {
      displayEmailErrorMessage = true;
    }

    if (password === '') {
      displayPasswordErrorMessage = true;
    }

    if (email !== '' && password !== '') {
      isLoging = true;
      return console.log('Welcome ✌️')
    }
  }
</script>