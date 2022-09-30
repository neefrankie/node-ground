<script setup lang="ts">
import CenterContainer from '../components/layout/CenterContainer.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.token)
</script>

<template>
  <CenterContainer>
    <h4 class="text-center">Reset Password</h4>
    <div>Token: {{ route.params.token }}</div>
  </CenterContainer>
</template>

<style scoped>
</style>
