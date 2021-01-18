<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <SelectRestaurant @change="selectedRestaurant = $event" />
    </div>
    <RestaurantsInfo :dataSource="filteredRestaurants" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Restaurant } from "@/api/interfaces";
import { mapState } from "vuex";
import RestaurantsInfo from "@/components/RestaurantsInfo.vue";
import SelectRestaurant from "@/components/SelectRestaurant.vue";

export default Vue.extend({
  components: { RestaurantsInfo, SelectRestaurant },
  data() {
    const selectedRestaurant: string = "";
    return {
      selectedRestaurant,
    };
  },
  computed: {
    ...mapState(["foodData"]),
    filteredRestaurants(): Restaurant | Restaurant[] {
      if (this.selectedRestaurant) {
        return this.foodData.filter((rest: Restaurant) => {
          let name: string = rest.name.toLowerCase();
          return name.includes(this.selectedRestaurant);
        });
      }
      return this.foodData;
    },
  },
});
</script>

<style scoped>
</style>
