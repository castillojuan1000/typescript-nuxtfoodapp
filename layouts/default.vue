<template>
  <div>
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

export default Vue.extend({
  components: {
    NavBar,
    Footer,
  },
});
</script>

<style>
html {
  font-family: "Mulish", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
}
</style>
