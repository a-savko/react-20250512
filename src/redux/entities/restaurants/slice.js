import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../data/normalized-mock";

export const restaurantSlice = createSlice({
    name: "restaurantSlice",
    initialState: {
        ids: normalizedRestaurants.map(({ id }) => id),
        entities: normalizedRestaurants.reduce((acc, restaurant) => {
            acc[restaurant.id] = restaurant;
            return acc;
        }, {}),
    },
    selectors: {
        selectRestaurantIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
    }
})

export const { selectRestaurantById, selectRestaurantIds } = restaurantSlice.selectors;
