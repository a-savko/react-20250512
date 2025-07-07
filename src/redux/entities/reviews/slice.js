import { createSlice } from "@reduxjs/toolkit";
import { getReviewsThunk } from "./get-reviews";

export const reviewsByRestaurantSlice = createSlice({
    name: "reviewsByRestaurantSlice",
    initialState: {
        reviews: {},
        ids: {},
        entities: {},
    },
    selectors: {
        selectRestaurantReviewByReviewId: (state, id) => state.reviews[id],
        selectReviewIdsByRestaurantId: (state, restaurantId) => state.ids[restaurantId] || [],
        selectReviewsByRestaurantId: (state, restaurantId) => state.entities[restaurantId],
    },
    extraReducers: (builder) => {
        builder
            .addCase(getReviewsThunk.fulfilled, (state, { meta, payload }) => {
                const restaurantId = meta.arg;

                state.ids[restaurantId] = payload.map(({ id }) => id);
                state.entities[restaurantId] = payload;
                state.reviews = {
                    ...state.reviews,
                    ...payload.reduce((acc, review) => {
                        acc[review.id] = review;
                        return acc;
                    }, {})
                };
            });
    },
});

export const { selectReviewIdsByRestaurantId, selectReviewsByRestaurantId, selectRestaurantReviewByReviewId } = reviewsByRestaurantSlice.selectors;
