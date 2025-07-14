import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurantThunk } from "./get-restaurant";
import { getRestaurantsThunk } from "./get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    initialState: entityAdapter.getInitialState({ dishRestaurants: {} }),
    selectors: {
        selectDishIdsByRestaurantId: (state, restaurantId) => state.entities[restaurantId]?.menu || [].includes(),
        selectRestaurantByDishId: (state, dishId) => Object.values(state.entities).find(restaurant => state.entities[restaurant.id]?.menu?.includes(dishId)),
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurantThunk.fulfilled, (state, { payload }) => {
                console.log(`${getRestaurantThunk.fulfilled}: `, payload);

                entityAdapter.setOne(state, payload);
            })
            .addCase(getRestaurantsThunk.fulfilled, (state, { payload }) => {
                console.log(`${getRestaurantsThunk.fulfilled}: `, payload);

                entityAdapter.setMany(state, payload);
            })
    }
})

export const selectRestaurantSlice = (state) => state[restaurantSlice.name];

export const {
    selectById: selectRestaurantById,
    selectIds: selectRestaurantIds,
    selectAll: selectRestaurants
} = entityAdapter.getSelectors(selectRestaurantSlice);
export const { selectRestaurantByDishId, selectDishIdsByRestaurantId } = restaurantSlice.selectors;
