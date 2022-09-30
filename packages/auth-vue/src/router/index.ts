import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import HomePage from './HomePage.vue';
import LoginPage from './LoginPage.vue';
import SignUpPage from './SignUpPage.vue';
import ForgotPassword from './ForgotPassword.vue';
import PasswordResetPage from './PasswordResetPage.vue';
import { authService } from '../service/AuthService';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: function () {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'Home'
    },
    {
      path: '/login',
      component: LoginPage,
      name: 'Login'
    },
    {
      path: '/signup',
      component: SignUpPage,
      name: 'SignUp'
    },
    {
      path: '/forgot-password',
      component: ForgotPassword,
      name: 'ForgotPassword'
    },
    {
      path: '/password-reset/:token',
      component: PasswordResetPage,
      name: 'PasswordReset'
    }
  ]
});

function canNoAuthAccess(to: RouteLocationNormalized): boolean {
  if (!to.name) {
    return false;
  }

  return ['Login', 'SignUp', 'ForgotPassword', 'PasswordReset'].includes(to.name as string);
}

router.beforeEach(async (to, from) => {
  console.log(to);
  console.log(from);
  if (!authService.isLoggedIn && to.name !== 'LogIn' && !canNoAuthAccess(to)) {
    authService.redirectTo = to.fullPath;
    return {
      name: 'Login',
    };
  } else {
    return true;
  }
});

export default router
