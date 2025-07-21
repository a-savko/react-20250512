// should be removed for RTK query only
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_PATHS } from "../../constants/api-endpoint-constants";
import { buildUrl } from "../../../helpers/url-helper";
import { selectIsPendingOrFulfilled } from "../request/slice";

const typePrefix = 'restaurants/getRestaurants';

export const getRestaurantsThunk = createAsyncThunk(typePrefix,
    async (_, { rejectWithValue }) => {
        const url = buildUrl(API_PATHS.Restaurants);
        const response = await fetch(url);

        if (!response.ok) {
            return rejectWithValue([]);
        }

        return await response.json();;
    },
    {
        condition: (_, { getState }) => {
            const state = getState();

            return !selectIsPendingOrFulfilled(state, typePrefix);
        }
    }
);
