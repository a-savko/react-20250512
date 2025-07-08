import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesThunk } from "./get-dishes";

const entityAdapter = createEntityAdapter();

export const dishesByRestaurantSlice = createSlice({
    name: 'dishesByRestaurantSlice',
    initialState: entityAdapter.getInitialState({
        idsByRestaurant: {},
        entitiesByRestaurant: {},
    }),
    selectors: {
        selectDishIdsByRestaurantId: (state, restaurantId) => state.idsByRestaurant[restaurantId] || [],
        selectDishesByRestaurantId: (state, restaurantId) => state.entitiesByRestaurant[restaurantId],
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDishesThunk.fulfilled, (state, { meta, payload }) => {
                const restaurantId = meta.arg;

                state.idsByRestaurant[restaurantId] = payload.map(({ id }) => id);
                state.entitiesByRestaurant[restaurantId] = payload;

                entityAdapter.addMany(state, payload);
            });
    }
});

const selectDishesSlice = (state) => state[dishesByRestaurantSlice.name];
export const { selectById: selectRestaurantsDishByDishId } = entityAdapter.getSelectors(selectDishesSlice);

export const { selectDishIdsByRestaurantId, selectDishesByRestaurantId } = dishesByRestaurantSlice.selectors;
