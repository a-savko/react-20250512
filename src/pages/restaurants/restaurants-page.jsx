import { useSelector } from 'react-redux';
import { Restaurants } from '../../components/restaurants/restaurants';
import { isLoading } from '../../helpers/statuses-helper';
import { Loading } from '../../components/loading/loading';
import { useRequest } from '../../redux/hooks/use-request';
import { selectRestaurants } from '../../redux/entities/restaurant/slice';
import { getRestaurantsThunk } from '../../redux/entities/restaurant/get-restaurants';

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurantsThunk);
  const restaurants = useSelector(selectRestaurants);

  if (isLoading(requestStatus)) {
    return <Loading />;
  }

  return <Restaurants restaurants={restaurants} />;
};
