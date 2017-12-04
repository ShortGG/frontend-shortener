<template>
  <div id="app">
    <img class="logo" src="../static/logo.png" alt="short.gg logo">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2, h3, h4 {
  font-family: 'Pacifico', cursive;
}

div, p, input {
  font-family: 'Lato', sans-serif !important;
}

.logo {
  max-width: 272px;

}

</style>
