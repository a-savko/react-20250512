import { useSelector } from 'react-redux';
import { NoData } from '../common/no-data';
import { Menu } from '../menu-list/menu-list';
import { getDishesThunk } from '../../redux/entities/dish/get-dishes';
import { isLoading, isRejected } from '../../helpers/statuses-helper';
import { Loading } from '../loading/loading';
import { useRequest } from '../../redux/hooks/use-request';
import { selectDishesByRestaurantId } from '../../redux/entities/dish/slice';
import { getRestaurantThunk } from '../../redux/entities/restaurant/get-restaurant';

export const RestaurantMenuContainer = ({ restaurantId }) => {
  const dishesRequestStatus = useRequest(getDishesThunk, restaurantId);
  const restaurantRequestStatus = useRequest(getRestaurantThunk, restaurantId);
  
  const dishes = useSelector((state) =>
    selectDishesByRestaurantId(state, restaurantId)
  );

  if (!dishes?.length && isLoading(dishesRequestStatus) && !isRejected(dishesRequestStatus)
    || isLoading(restaurantRequestStatus) && !isRejected(restaurantRequestStatus)) {
    return <Loading />;
  }

  if (!dishes?.length) {
    return <NoData />;
  }

  return <Menu dishes={dishes} />;
};
