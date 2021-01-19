<template>
  <main class="container">
    <section
      class="image"
      :style="`background: url(/${currentItem.img}) no-repeat center center`"
    ></section>

    <section class="details">
      <h1>{{ currentItem.item }}</h1>

      <h3>Price: ${{ currentItem.price.toFixed(2) }}</h3>

      <div class="quantity">
        <input type="number" min="1" v-model.number="count" />
        <button @click="addToCart" class="primary">
          Add to Cart - ${{ combinedPrice.toFixed(2) }}
        </button>
      </div>
      <fieldset v-if="currentItem.options">
        <legend>
          <h3>Options</h3>
        </legend>
        <div v-for="option in currentItem.options" :key="option">
          <input
            type="radio"
            name="option"
            :id="option"
            :value="option"
            v-model="itemOptions"
          />
          <label :for="option">{{ option }}</label>
        </div>
      </fieldset>

      <fieldset v-if="currentItem.addOns">
        <legend>
          <h3>Add Ons</h3>
        </legend>
        <div v-for="addon in currentItem.addOns" :key="addon">
          <input
            type="checkbox"
            name="addon"
            :id="addon"
            :value="addon"
            v-model="itemAddons"
          />
          <label :for="addon">{{ addon }}</label>
        </div>
      </fieldset>
      <!-- <Toast v-if="cartSubmitted">
        Order Submited!<br />
        Check out more <nuxt-link to="/restaurants">restaurants</nuxt-link>
      </Toast> -->
    </section>

    <section class="options">
      <h3>Description</h3>
      <p>{{ currentItem.description }}</p>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { Item } from "@/api/interfaces";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

export default Vue.extend({
  data() {
    let id: string = this.$route.params.id;
    let count: number = 1;
    let itemOptions: string = "";
    let itemAddons: string[] = [];
    // let itemSizeAndCost: any[] = [];
    let cartSubmitted: boolean = false;

    return {
      id,
      count,
      itemOptions,
      itemAddons,
      // itemSizeAndCost,
      cartSubmitted,
    };
  },
  computed: {
    ...mapState(["foodData"]),
    currentItem(): Item {
      let result;
      for (let i = 0; i < this.foodData.length; i++) {
        for (let j = 0; j < this.foodData[i].menu.length; j++) {
          if (this.foodData[i].menu[j].id === this.id) {
            result = this.foodData[i].menu[j];
            break;
          }
        }
      }
      return result;
    },
    combinedPrice(): number {
      let total = this.count * this.currentItem.price;
      return total;
    },
  },
  methods: {
    addToCart() {
      let formOutput = {
        id: uuidv4(),
        item: this.currentItem.item,
        count: this.count,
        options: this.itemOptions,
        addOns: this.itemAddons,
        combinedPrice: this.combinedPrice,
      };

      this.cartSubmitted = true;
      this.$store.commit("addToCart", formOutput);

      setTimeout(() => {
        this.cartSubmitted = false;
      }, 4000);
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
}

.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
}
.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}
.options {
  grid-area: 2 / 1 / 3 / 2;
}
button {
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
}
fieldset {
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
}
</style>
