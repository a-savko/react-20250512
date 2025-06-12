import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants/slice";
import { dishSlice } from "./entities/dishes/slice";
import { reviewSlice } from "./entities/reviews/slice";
import { userSlice } from "./entities/user/slice";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [userSlice.name]: userSlice.reducer,
    }
})
