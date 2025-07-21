// should be removed for RTK query only
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buildUrl } from "../../../helpers/url-helper";
import { API_PATHS } from "../../constants/api-endpoint-constants";
import { selectIsPendingOrFulfilled } from "../request/slice";

const typePrefix = 'dishes/getDishes';

export const getDishesThunk = createAsyncThunk(typePrefix, async (restaurantId, { rejectWithValue }) => {
    const url = buildUrl(API_PATHS.Dishes, { query: { restaurantId } });
    const response = await fetch(url);

    if (!response.ok) {
        rejectWithValue([]);
    }

    return await response.json();
}, {
    condition: (restaurantId, { getState }) => {
        const state = getState();

        return !selectIsPendingOrFulfilled(state, typePrefix, restaurantId);
    }
});
