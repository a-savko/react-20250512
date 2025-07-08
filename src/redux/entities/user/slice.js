import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "./get-users";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
    name: "usersSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder
            .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            });
    }
});

const selectUsersSlice = (state) => state[usersSlice.name];

export const { selectById: selectUserById, selectIds: selectUserIds, selectAll: selectUsers } = entityAdapter.getSelectors(selectUsersSlice);
