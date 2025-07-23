import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./entities/basket/slice";
import { requestSlice } from "./entities/request/slice";
import { api } from "./api";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log('state', store.getState());

    next(action);
}

export const store = configureStore({
    reducer: {
        [basketSlice.name]: basketSlice.reducer,
        [requestSlice.name]: requestSlice.reducer, // should be removed for RTK query only
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(api.middleware)
        .concat(loggerMiddleware)
})
