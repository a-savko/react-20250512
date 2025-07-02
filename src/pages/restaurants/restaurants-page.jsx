import { useSelector } from 'react-redux';
import { Restaurants } from '../../components/restaurants/restaurants';
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <Restaurants restaurantIds={restaurantIds} />;
};
