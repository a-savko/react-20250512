import { configureStore } from "@reduxjs/toolkit";
import { reviewsSlice } from "./entities/reviews/slice";
import { usersSlice } from "./entities/user/slice";
import { basketSlice } from "./entities/basket/slice";
import { restaurantSlice } from "./entities/restaurant/slice";
import { dishSlice } from "./entities/dish/slice";
import { requestSlice } from "./entities/request/slice";

const loggerMidleware = (store) => (next) => (action) => {
    console.log('state', store.getState());

    next(action);
}

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [basketSlice.name]: basketSlice.reducer,
        [requestSlice.name]: requestSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMidleware),
})
