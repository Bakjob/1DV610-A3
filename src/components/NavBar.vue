<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/time">Time Converter</router-link>
    </li>
    <li>
        <router-link to="/temp">Temperature Converter</router-link>
    </li>
    <li>
        <router-link to="/weight">Weight Converter</router-link>
    </li>
    <li>
        <router-link to="/length">Length Converter</router-link>
    </li>
    <li>
        <router-link to="/volume">Volume Converter</router-link>
    </li>
    <li>
        <router-link to="/speed">Speed Converter</router-link>
    </li>
    <li>
        <router-link to="/area">Area Converter</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 1rem;
  color: white;
}

a.router-link-exact-active {
  color: blue;
}

a:hover {
  background-color: transparent;
  color: rgb(255, 0, 0);
}
</style>
