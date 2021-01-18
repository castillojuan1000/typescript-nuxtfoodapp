<template>
  <main class="container">
    <Hero />
    <RestaurantsInfo :dataSource="foodData" />
  </main>
</template>

<script lang="ts">
import Hero from "@/components/Hero.vue";
import RestaurantsInfo from "@/components/RestaurantsInfo.vue";
import { mapState } from "vuex";
import Vue from "vue";

export default Vue.extend({
  components: {
    Hero,
    RestaurantsInfo,
  },
  computed: {
    ...mapState(["foodData"]),
  },
});
</script>

<style scoped>
</style>
