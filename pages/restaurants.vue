<template>
  <RestaurantsInfo />
</template>

<script lang="ts">
import Vue from "vue";

import { mapState } from "vuex";
import RestaurantsInfo from "@/components/RestaurantsInfo.vue";

export default Vue.extend({
  components: { RestaurantsInfo },
  computed: {
    ...mapState(["foodData"]),
  },
});
</script>

<style scoped>
</style>
