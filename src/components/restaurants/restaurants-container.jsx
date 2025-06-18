import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';
import { Restaurants } from './restaurants';

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <Restaurants restaurantIds={restaurantIds} />;
};
