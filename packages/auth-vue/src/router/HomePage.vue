<script setup lang="ts">
import CenterContainer from '../components/layout/CenterContainer.vue';
import { authService } from '../service/AuthService';
import { useRouter } from 'vue-router';

const router = useRouter();

function logout() {
  authService.logout();
  router.push({
    name: 'Login',
    replace: true,
  })
}
</script>

<template>
  <CenterContainer>
    <h4 class="text-center">Welcome</h4>
    <div class="text-center">
      <button
        class="btn btn-link"
        @click="logout"
      >
        Log out
      </button>
    </div>
  </CenterContainer>
</template>

<style scoped>
</style>
