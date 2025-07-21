export const selectDishFromResultById = (result, dishId) => ({ ...result, data: result?.data?.find(({ id }) => id === dishId) });
