import { createSlice } from "@reduxjs/toolkit";
import { getDishThunk } from "./get-dish";

export const dishSlice = createSlice({
    name: 'dishSlice',
    initialState: {
        entities: {},
    },
    selectors: {
        selectDishById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDishThunk.fulfilled, (state, { payload }) => {
                state.entities[payload.id] = payload;
            })
    }
})

export const { selectDishById } = dishSlice.selectors;
