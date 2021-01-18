<template>
  <section class="restaurantinfo">
    <div v-for="store in foodData" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>
      <div class="row">
        <div
          v-for="menuItem in store.menu"
          :key="menuItem.id"
          class="items"
          :style="`background: url(${menuItem.img}) no-repeat center center`"
        >
          <div class="iteminfo">
            <div>
              <h4>{{ menuItem.item }}</h4>
              <p>${{ menuItem.price.toFixed(2) }}</p>
            </div>
            <nuxt-link :to="`/items/${menuItem.id}`">
              <button class="ghost">View Item</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState(["foodData"]),
  },
});
</script>

<style scoped>
</style>
