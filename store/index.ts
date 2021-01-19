
import { Restaurant } from '@/api/interfaces'

export interface RestaurantStoreState {
  foodData: Restaurant[]
  cart: FormOutput[]
}

export interface FormOutput {
  id: string;
  item: string;
  count: number;
  options?: string;
  addOns: string[];
  combinedPrice: number;
}



export const state: () => RestaurantStoreState = () => ({
  foodData: [],
  cart: []

})


export const mutations = {
  addToCart: (state: RestaurantStoreState, formOutput: FormOutput) => {
    state.cart.push(formOutput)
  },

  updateFoodData: (state: RestaurantStoreState, data: Restaurant[]) => {
    state.foodData = data;
  }
};



export const actions = {
  async getFoodData(context: {
    state: RestaurantStoreState,
    commit: (method: string, payload?: any) => void
  }) {
    const { state, commit } = context;
    if (state.foodData.length) return;

    try {

      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants", {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.AWS_API_KEY!
        }
      }
      )
        .then(response => response.json())
        .then(data => {
          commit("updateFoodData", data);
        });
    } catch (err) {
      console.log(err);
    }
  }
};
