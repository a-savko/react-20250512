export const selectRestaurantFromResultByDishId = (result, dishId) => ({ ...result, data: result?.data?.find(({ menu }) => menu.includes(dishId)) });
export const selectRestaurantFromResultById = (result, restaurantId) => ({ ...result, data: result?.data?.find(({ id }) => id === restaurantId) });
