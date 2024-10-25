<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <nav>
      <Navbar />
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
}

nav {
  background-color: white;
  color: white;
  padding: 1rem;
  text-align: center;
  flex-shrink: 0;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
  background-color: gray;
}
</style>
