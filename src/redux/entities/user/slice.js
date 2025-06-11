import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../data/normalized-mock";

export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        ids: normalizedUsers.map(({ id }) => id),
        entities: normalizedUsers.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
        }, {})
    },
    selectors: {
        selectUserIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id],
    }
});

export const { selectUserById, selectUserIds } = userSlice.selectors;
