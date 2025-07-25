import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '../../config';
import { API_PATHS } from '../constants/api-endpoint-constants';
import { buildUrlPath } from '../../helpers/url-helper';

const TAGS = {
    Reviews: 'Reviews',
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: CONFIG.api.host }),
    tagTypes: Object.values(TAGS),
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
            query: (restaurantId) => buildUrlPath(API_PATHS.RestaurantReviews, { query: { restaurantId } }),
            providesTags: [{ type: TAGS.Reviews, id: 'all' }]
        }),
        getUsers: builder.query({ query: () => buildUrlPath(API_PATHS.Users) }),
        addReview: builder.mutation({
            query: ({ restaurantId, review }) => ({
                url: buildUrlPath(API_PATHS.AddReview, { params: { restaurantId } }),
                method: 'POST',
                body: review,
            }),
            invalidatesTags: [{ type: TAGS.Reviews, id: 'all' }]
        }),
        updateReview: builder.mutation({
            query: ({ reviewId, review }) => ({
                url: buildUrlPath(API_PATHS.UpdateReview, { params: { reviewId } }),
                method: 'PATCH',
                body: review,
            }),
            invalidatesTags: [{ type: TAGS.Reviews, id: 'all' }]
        }),
    })
});

export const {
    // GET
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

    // POST
    useAddReviewMutation,

    // PATCH
    useUpdateReviewMutation,
} = api;
