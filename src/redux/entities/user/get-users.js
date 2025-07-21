// should be removed for RTK query only
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buildUrl } from '../../../helpers/url-helper';
import { API_PATHS } from "../../constants/api-endpoint-constants";
import { selectIsPendingOrFulfilled } from "../request/slice";
import { selectUsers } from "./slice";

const typePrefix = 'user/getUsers';

export const getUsersThunk = createAsyncThunk(typePrefix, async (_, { rejectWithValue }) => {
    const url = buildUrl(API_PATHS.Users);
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        return rejectWithValue([]);
    }

    return data;
}, {
    condition: (_, { getState }) => {
        const state = getState();

        return !selectIsPendingOrFulfilled(state, typePrefix)
            && !selectUsers(state)?.length;
    }
});
