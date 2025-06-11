import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../data/normalized-mock";

export const reviewSlice = createSlice({
    name: "reviewSlice",
    initialState: {
        ids: normalizedReviews.map(({ id }) => id),
        entities: normalizedReviews.reduce((acc, review) => {
            acc[review.id] = review;
            return acc;
        }, {})
    },
    selectors: {
        selectReviews: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id],
    }
});

export const { selectReviewById, selectReviews } = reviewSlice.selectors;
