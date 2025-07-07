import { createSlice } from "@reduxjs/toolkit";
import { getRestaurantThunk } from "./get-restaurant";

export const restaurantSlice = createSlice({
    name: 'restaurantSlice', initialState: {
        entities: {},
    },
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurantThunk.fulfilled, (state, { payload }) => {
                state.entities[payload.id] = payload;
            })
    }
})

export const { selectRestaurantById } = restaurantSlice.selectors;
