import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { getDishThunk } from "./get-dish";
import { getDishesThunk } from "./get-dishes";
import { selectRestaurantSlice } from "../restaurant/slice";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dishSlice',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder
            .addCase(getDishThunk.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            })
            .addCase(getDishesThunk.fulfilled, (state, { payload }) => {
                entityAdapter.setMany(state, payload);
            });
    }
});

const selectDishSlice = (state) => state[dishSlice.name];
export const { selectById: selectDishById } = entityAdapter.getSelectors(selectDishSlice);

const getDishIdsByRestaurantId = (state, restaurantId) => {
    return selectRestaurantSlice(state).entities[restaurantId]?.menu || [];
}
const getDishes = (state) => selectDishSlice(state).entities;

export const selectDishesByRestaurantId = createSelector(
    [getDishIdsByRestaurantId, getDishes],
    (dishIdsByRestaurantId, dishes) => {
        return dishIdsByRestaurantId.map(id => dishes[id]).filter(Boolean);
    }
);
