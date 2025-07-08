import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurantThunk } from "./get-restaurant";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurantThunk.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            })
    }
})

const selectRestaurantSlice = (state) => state[restaurantSlice.name];

export const { selectById: selectRestaurantById } = entityAdapter.getSelectors(selectRestaurantSlice);

