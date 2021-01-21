<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/"><Logo /></nuxt-link>
      </li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
    </ul>
    <div class="smallnum" v-if="cartCount > 0">{{ cartCount }}</div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Logo from "@/components/Logo.vue";
import { FormOutput } from "@/interfaces/interfaces";

export default Vue.extend({
  components: { Logo },
  computed: {
    ...mapState(["cart"]),
    cartCount(): number {
      return this.cart.reduce(
        (currentItem: number, nextItem: FormOutput) =>
          (currentItem += nextItem.count),
        0
      );
    },
  },
});
</script>

<style scoped>
</style>
