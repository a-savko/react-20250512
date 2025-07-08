import { useSelector } from 'react-redux';
import { Restaurants } from '../../components/restaurants/restaurants';
import { selectRestaurants } from '../../redux/entities/restaurants/slice';
import { getRestaurantsThunk } from '../../redux/entities/restaurants/get-restaurants';
import { isLoading } from '../../helpers/statuses-helper';
import { Loading } from '../../components/loading/loading';
import { useRequest } from '../../redux/hooks/use-request';

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurantsThunk);
  const restaurants = useSelector(selectRestaurants);

  if (isLoading(requestStatus)) {
    return <Loading />;
  }

  return <Restaurants restaurants={restaurants} />;
};
