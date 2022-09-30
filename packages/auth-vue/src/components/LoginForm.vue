<script setup lang="ts">
import { Form, useForm } from 'vee-validate';
import * as yup from 'yup';
import { AuthParams, mockAccount, UserAccount } from '../types/account';
import TextInput from './controls/TextInput.vue';

const emit = defineEmits<{
  (e: 'success', value: UserAccount): void,
}>();

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const {
  handleSubmit,
  isSubmitting,
  meta
} = useForm<AuthParams>({
  validationSchema: schema,
  initialValues: {
    email: '',
    password: '',
  }
});

const onSubmit = handleSubmit((values, actions) => {
  emit('success', mockAccount(values.email));
});
</script>

<template>
  <form @submit="onSubmit">
    <TextInput
      name="email"
      type="email"
      label="Email"
      placeholder="Your email address"
    />
    <TextInput
      name="password"
      type="password"
      label="Password"
      placeholder="Your password"
    />
    <div class="d-grid">
      <button
        class="btn btn-primary"
        type="submit"
        :disabled="!meta.dirty || isSubmitting"
      >Submit</button>
    </div>

  </form>
</template>

<style scoped>
</style>
