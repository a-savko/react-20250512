import { createAsyncThunk } from "@reduxjs/toolkit";
import { buildUrl } from "../../../helpers/url-helper";
import { API_PATHS } from "../../constants/api-endpoint-constants";
import { selectIsPendingOrFulfilled } from "../request/slice";

const typePrefix = 'reviews/getRestaurantReviews';

export const getReviewsThunk = createAsyncThunk(typePrefix, async (restaurantId, { rejectWithValue }) => {
    const url = buildUrl(API_PATHS.RestaurantReviews, { query: { restaurantId } });
    const response = await fetch(url);

    if (!response.ok) {
        return rejectWithValue(null);
    }

    return response.json();
}, {
    condition: (restaurantId, { getState }) => {
        const state = getState();

        return !selectIsPendingOrFulfilled(state, typePrefix, restaurantId);
    }
});
