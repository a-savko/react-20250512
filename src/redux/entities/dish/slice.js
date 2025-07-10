import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishThunk } from "./get-dish";
import { getDishesThunk } from "./get-dishes";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dishSlice',
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectDishesByRestaurantId: (state, restaurantId) =>
            Object.values(state.entities)
                .filter(dish => dish.restaurantId && dish.restaurantId === restaurantId) || [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDishThunk.fulfilled, (state, { payload }) => {
                const restaurantId = state.entities[payload.id]?.restaurantId;

                entityAdapter.setOne(state, { ...payload, restaurantId });
            })
            .addCase(getDishesThunk.fulfilled, (state, { meta, payload }) => {
                const restaurantId = meta.arg;

                const dishes = payload.map((dish) => { return { ...dish, restaurantId }; });

                entityAdapter.setMany(state, dishes);
            });
    }
});

const selectDishSlice = (state) => state[dishSlice.name];
export const { selectById: selectDishById } = entityAdapter.getSelectors(selectDishSlice);
export const { selectDishesByRestaurantId } = dishSlice.selectors;
