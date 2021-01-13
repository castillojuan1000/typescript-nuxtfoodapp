<template>
  <div>
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      name: "juan",
      lastName: "Castillo",
    };
  },
  computed: {
    fullName(): string {
      return `${this.name} ${this.lastName}`;
    },
  },
});
</script>

<style scoped>
</style>