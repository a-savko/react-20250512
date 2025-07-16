import { createAsyncThunk } from "@reduxjs/toolkit";
import { buildUrl } from "../../../helpers/url-helper";
import { API_PATHS } from "../../constants/api-endpoint-constants";
import { selectIsPendingOrFulfilled } from "../request/slice";

const typePrefix = 'dish/getDish';

export const getDishThunk = createAsyncThunk(typePrefix, async (dishId, { rejectWithValue }) => {
    const url = buildUrl(API_PATHS.DishDetails, { params: { dishId } });
    const response = await fetch(url);

    if (!response.ok) {
        rejectWithValue(null);
    }

    return await response.json();
}, {
    condition: (dishId, { getState }) => {
        const state = getState();

        return !selectIsPendingOrFulfilled(state, typePrefix, dishId);
    }
});
