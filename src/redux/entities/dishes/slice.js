import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../data/normalized-mock";

export const dishSlice = createSlice({
    name: 'dishSlice',
    initialState: {
        ids: normalizedDishes.map(({ id }) => id),
        entities: normalizedDishes.reduce((acc, dish) => {
            acc[dish.id] = dish;

            return acc;
        }, {}),
    },
    selectors: {
        selectDishIds: state => state.ids,
        selectDishById: (state, id) => state.entities[id]
    }
})

export const { selectDishById, selectDishIds } = dishSlice.selectors;
