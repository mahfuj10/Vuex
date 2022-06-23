<template>
  <Navigation />
  <router-view />
</template>

<script>


import Navigation from "./components/Navigation.vue";

export default {

  components: {
    Navigation
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    count() {
      return this.$store.state.count
    },
    ProductId() {
      return this.$store.getters.getProductId;
    },

  },
  methods: {
    increment() {
      this.$store.commit('increment', 1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  background-color: #FBF6F2;
  padding: 0;
}
</style>
