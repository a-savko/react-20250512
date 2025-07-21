import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';
import { API_PATHS } from '../constants/api-endpoint-constants';
import { buildUrlPath } from '../../helpers/url-helper';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: CONFIG.api.host }),
    endpoints: (builder) => ({
        getRestaurants: builder.query({ query: () => buildUrlPath(API_PATHS.Restaurants) }),
        getRestaurantById: builder.query({
            query: (restaurantId) => buildUrlPath(API_PATHS.RestaurantDetails, { params: { restaurantId } })
        }),
        getDishes: builder.query({
            query: (restaurantId) => buildUrlPath(API_PATHS.Dishes, { query: { restaurantId } }),
        }),
        getDishById: builder.query({ query: (dishId) => buildUrlPath(API_PATHS.DishDetails, { params: { dishId } }) }),
        getReviews: builder.query({
            query: (restaurantId) => buildUrlPath(API_PATHS.RestaurantReviews, { query: { restaurantId } })
        }),
        getUsers: builder.query({ query: () => buildUrlPath(API_PATHS.Users) }),
    })
});

export const {
    useGetRestaurantsQuery,
    useLazyGetRestaurantsQuery,
    useGetRestaurantByIdQuery,
    useLazyGetRestaurantByIdQuery,
    useGetDishesQuery,
    useLazyGetDishesQuery,
    useGetDishByIdQuery,
    useLazyGetDishByIdQuery,
    useGetReviewsQuery,
    useLazyGetReviewsQuery,
    useGetUsersQuery,
    useLazyGetUsersQuery,
} = api;
