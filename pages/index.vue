<template>
  <main class="container">
    <Hero />
  </main>
</template>

<script lang="ts">
import Hero from "@/components/Hero.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Hero,
  },
});
</script>

<style scoped>
</style>