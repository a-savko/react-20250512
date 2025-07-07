import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/slice";
import { dishesByRestaurantSlice } from "./entities/dishes/slice";
import { reviewsByRestaurantSlice } from "./entities/reviews/slice";
import { usersSlice } from "./entities/user/slice";
import { basketSlice } from "./entities/basket/slice";
import { restaurantSlice } from "./entities/restaurant/slice";
import { dishSlice } from "./entities/dish/slice";
import { requestSlice } from "./entities/request/slice";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [dishesByRestaurantSlice.name]: dishesByRestaurantSlice.reducer,
        [reviewsByRestaurantSlice.name]: reviewsByRestaurantSlice.reducer,
        [basketSlice.name]: basketSlice.reducer,
        [requestSlice.name]: requestSlice.reducer,
    },
})
