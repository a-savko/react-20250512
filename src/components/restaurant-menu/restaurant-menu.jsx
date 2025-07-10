import { useSelector } from 'react-redux';
import { NoData } from '../common/no-data';
import { Menu } from '../menu-list/menu-list';
import { getDishesThunk } from '../../redux/entities/dish/get-dishes';
import { isLoading } from '../../helpers/statuses-helper';
import { Loading } from '../loading/loading';
import { useRequest } from '../../redux/hooks/use-request';
import { selectDishesByRestaurantId } from '../../redux/entities/dish/slice';

export const RestaurantMenuContainer = ({ restaurantId }) => {
  const requestStatus = useRequest(getDishesThunk, restaurantId);

  const dishes = useSelector((state) =>
    selectDishesByRestaurantId(state, restaurantId)
  );

  if (isLoading(requestStatus)) {
    return <Loading />;
  }

  if (!dishes?.length) {
    return <NoData />;
  }

  return <Menu dishes={dishes} />;
};
