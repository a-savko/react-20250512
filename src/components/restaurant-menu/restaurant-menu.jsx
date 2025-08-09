import { NoData } from '@/components/common/no-data';
import { Menu } from '@/components/menu-list/menu-list';
import { Loading } from '@/components/loading/loading';
import { useGetDishesQuery, useGetRestaurantByIdQuery } from '@/redux/api';

export const RestaurantMenuContainer = ({ restaurantId }) => {
  const { data: restaurant, isLoading: isRestaurantLoading } =
    useGetRestaurantByIdQuery(restaurantId);
  const { isLoading: isDishesLoading } = useGetDishesQuery(restaurantId);

  if (isRestaurantLoading || isDishesLoading) {
    return <Loading />;
  }
  if (!restaurant?.menu?.length) {
    return <NoData />;
  }

  return <Menu dishIds={restaurant.menu} restaurantId={restaurantId} />;
};
