<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="container">
      <a href="/" class="logo-link">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      </a>
    </div> 
  </header>

  <div class="wrapper">
    <HelloWorld msg="You did it!" />

    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
header {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  width: 100%;
  height: 50px;
}
.container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.logo-link {
  box-sizing: border-box;
  padding: 5px;
  margin-left: 5px;
  display: inline-block;
  height: 50px;
  width: 50px;
}

.logo {
  width: 100%;
  height: 100%;
}



nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
