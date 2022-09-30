<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';

const props = defineProps<{
  type: 'email' | 'password' | 'text' | 'url' | 'number';
  name: string;
  label?: string;
  placeholder?: string;
  desc?: string;
  disabled?: boolean;
}>();

const nameRef = toRef(props, 'name');

const {
  value,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(nameRef);

</script>

<template>
  <div
    class="mb-2"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <label
      v-if="label"
      :for="name"
    >
      {{ label }}
    </label>
    <input
      class="form-control"
      :name="name"
      :id="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      :disabled="disabled"
    />
    <small v-if="desc">{{ desc }}</small>
    <div
      v-show="errorMessage"
      class="invalid-feedback"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>
.invalid-feedback {
  display: block;
}
</style>
