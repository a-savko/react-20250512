import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishThunk } from "./get-dish";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dishSlice',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder
            .addCase(getDishThunk.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            })
    }
});

const selectDishSlice = (state) => state[dishSlice.name];
export const { selectById: selectDishById } = entityAdapter.getSelectors(selectDishSlice);
