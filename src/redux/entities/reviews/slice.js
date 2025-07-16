import { createEntityAdapter, createSlice, createSelector } from "@reduxjs/toolkit";
import { getReviewsThunk } from "./get-reviews";
import { selectRestaurantSlice } from "../restaurant/slice";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
    name: "reviewsSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder
            .addCase(getReviewsThunk.fulfilled, (state, { payload }) => {
                entityAdapter.setMany(state, payload);
            });
    },
});

const selectReviewSlice = (state) => state[reviewsSlice.name];
export const { selectById: selectReviewById } = entityAdapter.getSelectors(selectReviewSlice);

const getReviewIdsByRestaurantId = (state, restaurantId) => {
    return selectRestaurantSlice(state).entities[restaurantId]?.reviews || [];
}
const getReviews = (state) => selectReviewSlice(state).entities;

export const selectReviewsByRestaurantId = createSelector(
    [getReviewIdsByRestaurantId, getReviews],
    (reviewIdsByRestaurantId, reviews) => {
        return reviewIdsByRestaurantId.map(id => reviews[id]).filter(Boolean);
    }
);
