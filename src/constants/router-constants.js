export const ITEM_ID_ROUTE_TEMPLATE = ':id';

export const ROUTE_PATHS = {
  Home: '/',
  Restaurants: '/restaurants',
  RestaurantDetails: `/restaurants/${ITEM_ID_ROUTE_TEMPLATE}`,
  RestaurantMenu: 'menu',
  RestaurantReviews: 'reviews',
  Dish: '/dish',
  DishDetails: `/dish/${ITEM_ID_ROUTE_TEMPLATE}`,
  NotFound: '/not-found',
  NotSpecified: '*',
};
