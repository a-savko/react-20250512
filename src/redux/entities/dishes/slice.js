import { createSlice } from "@reduxjs/toolkit";
import { getDishesThunk } from "./get-dishes";

export const dishesByRestaurantSlice = createSlice({
    name: 'dishesByRestaurantSlice',
    initialState: {
        dishes: {},
        ids: {},
        entities: {},
    },
    selectors: {
        selectRestaurantsDishByDishId: (state, id) => state.dishes[id],
        selectDishIdsByRestaurantId: (state, restaurantId) => state.ids[restaurantId] || [],
        selectDishesByRestaurantId: (state, restaurantId) => state.entities[restaurantId],
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDishesThunk.fulfilled, (state, { meta, payload }) => {
                const restaurantId = meta.arg;

                state.ids[restaurantId] = payload.map(({ id }) => id);
                state.entities[restaurantId] = payload;
                state.dishes = {
                    ...state.dishes,
                    ...payload.reduce((acc, dish) => {
                        acc[dish.id] = dish;
                        return acc;
                    }, {})
                };
            });
    }
})

export const { selectDishIdsByRestaurantId, selectDishesByRestaurantId, selectRestaurantsDishByDishId } = dishesByRestaurantSlice.selectors;
