import { createSlice } from "@reduxjs/toolkit";
import { getRestaurantsThunk } from "./get-restaurants";

export const restaurantsSlice = createSlice({
    name: "restaurantsSlice",
    initialState: {
        ids: [],
        restaurants: [],
        dishRestaurants: {},
    },
    selectors: {
        selectRestaurantIds: (state) => state.ids,
        selectRestaurants: (state) => state.restaurants,
        selectRestaurantByDishId: (state, dishId) => state.dishRestaurants[dishId],
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurantsThunk.fulfilled, (state, { payload }) => {
                state.ids = payload.map(({ id }) => id);
                state.restaurants = payload;

                state.dishRestaurants = payload.reduce((acc, restaurant) => {
                    restaurant.menu.forEach((dishId) => {
                        acc[dishId] = restaurant;
                    });

                    return acc;
                }, {});
            });
    }
})

export const { selectRestaurantIds, selectRestaurants, selectRestaurantByDishId } = restaurantsSlice.selectors;
