import { NoData } from '../common/no-data';
import { Menu } from '../menu-list/menu-list';
import { Loading } from '../loading/loading';
import { useGetDishesQuery, useGetRestaurantByIdQuery } from '../../redux/api';

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
