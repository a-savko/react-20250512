import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../data/normalized-mock";

export const restaurantSlice = createSlice({
    name: "restaurantSlice",
    initialState: {
        ids: normalizedRestaurants.map(({ id }) => id),
        dishRestaurants: normalizedRestaurants.reduce((acc, restaurant) => {
            restaurant.menu.forEach((dishId) => {
                acc[dishId] = restaurant;
            });

            return acc;
        }, {}),
        entities: normalizedRestaurants.reduce((acc, restaurant) => {
            acc[restaurant.id] = restaurant;
            return acc;
        }, {}),
    },
    selectors: {
        selectRestaurantIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantByDishId: (state, dishId) => state.dishRestaurants[dishId],
    }
})

export const { selectRestaurantById, selectRestaurantIds, selectRestaurantByDishId } = restaurantSlice.selectors;
