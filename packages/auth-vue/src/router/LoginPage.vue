<script setup lang="ts">
import CenterContainer from '../components/layout/CenterContainer.vue';
import LoginForm from '../components/LoginForm.vue';
import { UserAccount } from '../types/account';
import { RouterLink, useRouter } from 'vue-router';
import { authService } from '../service/AuthService';

const router = useRouter();

function onLoggedIn(v: UserAccount) {
  console.log(v);
  authService.loggedIn(v);
  router.push({
    path: authService.getRedirectTo(),
    replace: true,
  });
}
</script>

<template>
  <CenterContainer>
    <h4 class="text-center">Log In</h4>
    <LoginForm @success="onLoggedIn" />
    <div class="d-flex justify-content-between mt-3">
      <RouterLink to="/forgot-password">Forgot password?</RouterLink>
      <RouterLink to="/signup">Sign Up</RouterLink>
    </div>
  </CenterContainer>
</template>

<style scoped>
</style>
