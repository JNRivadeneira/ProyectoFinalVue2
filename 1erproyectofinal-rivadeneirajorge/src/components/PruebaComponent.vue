<template>
  <Vueform>
    <GroupElement
      name="personal_information"
      label="Personal information"
    >
      <TextElement
        name="firstname"
        placeholder="First name"
        rules="required"
        :columns="6"
      />
      <TextElement
        name="lastname"
        placeholder="Last name"
        rules="required"
        :columns="6"
      />
    </GroupElement>
    <GroupElement
      name="account_information"
      label="Account information"
    >
      <TextElement
        name="email"
        placeholder="Email address"
        rules="required|email|max:255"
        :debounce="300"
      />
      <TextElement
        name="password"
        input-type="password"
        placeholder="Password"
        :rules="[
          'required',
          'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/',
          'confirmed'
        ]"
        :debounce="300"
        :messages="{
          regex: 'The Password must at least 8 characters long and contain at least one number, one uppercase and one lowercase character.'
        }"
      />
      <TextElement
        name="password_confirmation"
        input-type="password"
        placeholder="Password again"
        rules="required"
      />
    </GroupElement>

    <ToggleElement name="remember_me">
      Remember me
    </ToggleElement>

    <ButtonElement
      name="submit"
      add-class="mt-2"
      submits
    >
      Register
    </ButtonElement>
  </Vueform>
</template>

<script>
import { Vueform, useVueform } from '@vueform/vueform'

export default {
  mixins: [Vueform],
  setup: useVueform,
  data: () => ({
    vueform: {
      schema: {
        personal_information: {
          type: 'group',
          label: 'Personal information',
          schema: {
            firstname: {
              type: 'text',
              placeholder: 'First name',
              rules: 'required',
              columns: 6,
            },
            lastname: {
              type: 'text',
              floating: 'Last name',
              placeholder: 'Last name',
              rules: 'required',
              columns: 6,
            },
          }
        },
        account_information: {
          type: 'group',
          label: 'Account information',
          schema: {
            email: {
              type: 'text',
              placeholder: 'Email address',
              rules: 'required|email|max:255',
              debounce: 300
            },
            password: {
              type: 'text',
              inputType: 'password',
              placeholder: 'Password',
              rules: [
                'required',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/',
                'confirmed'
              ],
              debounce: 300,
              messages: {
                regex: 'The Password must at least 8 characters long and contain at least one number, one uppercase and one lowercase character.'
              }
            },
            password_confirmation: {
              type: 'text',
              inputType: 'password',
              placeholder: 'Password again',
              rules: 'required'
            },
          }
        },
        remember_me: {
          type: 'toggle',
          text: 'Remember me'
        },
        submit: {
          type: 'button',
          buttonLabel: 'Register',
          addClass: 'mt-2',
          submits: true
        }
      },
    }
  })
}
</script>