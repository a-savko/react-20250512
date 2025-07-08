import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurantsThunk } from "./get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
    name: "restaurantsSlice",
    initialState: entityAdapter.getInitialState({ dishRestaurants: {} }),
    selectors: {
        selectRestaurantByDishId: (state, dishId) => state.dishRestaurants[dishId],
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurantsThunk.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);

                state.dishRestaurants = payload.reduce((acc, restaurant) => {
                    restaurant.menu.forEach((dishId) => {
                        acc[dishId] = restaurant;
                    });

                    return acc;
                }, {});
            });
    }
});

const selectRestaurantsSlice = (state) => state[restaurantsSlice.name]

export const { selectIds: selectRestaurantIds, selectAll: selectRestaurants } = entityAdapter.getSelectors(selectRestaurantsSlice);
export const { selectRestaurantByDishId } = restaurantsSlice.selectors;
