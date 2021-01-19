<template>
  <main class="container cart">
    <h2>Cart</h2>
    <HungryMan />
    <table v-if="cart.length">
      <thead>
        <tr>
          <th>Item</th>
          <th>Add Ons</th>
          <th>Amount</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>
            {{ item.item }}
            <span v-if="item.options">-{{ item.options }}</span>
          </td>
          <td>
            <span v-for="addOn in item.addOns" :key="addOn" class="comma">{{
              addOn
            }}</span>
          </td>
          <td>{{ item.count }}</td>
          <td>{{ item.combinedPrice }}</td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td class="total">Total: ${{ totalPrice.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import HungryMan from "@/components/HungryMan.vue";
import { FormOutput } from "@/interfaces/interfaces";

export default Vue.extend({
  components: {
    HungryMan,
  },
  computed: {
    ...mapState(["cart"]),
    totalPrice(): number {
      let total = this.cart.reduce(
        (currentItem: number, nextItem: FormOutput) =>
          (currentItem += nextItem.combinedPrice),
        0
      );
      return total;
    },
  },
});
</script>

<style scoped>
</style>
