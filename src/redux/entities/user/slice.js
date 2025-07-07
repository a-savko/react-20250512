import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "./get-users";

export const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        ids: [],
        users: [],
        entities: {},
    },
    selectors: {
        selectUserIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id],
        selectUsers: (state) => state.users,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
                state.ids = payload.map(({ id }) => id);
                state.users = payload;
                state.entities = payload.reduce((acc, user) => {
                    acc[user.id] = user;
                    return acc;
                }, {});
            })
            ;
    }
});

export const { selectUserById, selectUserIds, selectUsers } = usersSlice.selectors;
