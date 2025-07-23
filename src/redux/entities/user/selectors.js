export const selectUserFromResultById = (result, userId) => ({ ...result, data: result?.data?.find(({ id }) => id === userId) });
