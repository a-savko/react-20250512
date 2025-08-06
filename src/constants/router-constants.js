export const ITEM_ID_ROUTE_TEMPLATE = ':id';

export const ROUTE_PATHS = {
  Home: '/',
  Restaurants: '/restaurants',
  RestaurantDetails: `/restaurants/${ITEM_ID_ROUTE_TEMPLATE}`,
  RestaurantMenu: `/restaurants/${ITEM_ID_ROUTE_TEMPLATE}/menu`,
  RestaurantReviews: `/restaurants/${ITEM_ID_ROUTE_TEMPLATE}/reviews`,
  Dish: '/dish',
  DishDetails: `/dish/${ITEM_ID_ROUTE_TEMPLATE}`,
  NotFound: '/not-found',
  NotSpecified: '*',
};

export const fillRouteId = (path, id) => path.replace(ITEM_ID_ROUTE_TEMPLATE, id);
