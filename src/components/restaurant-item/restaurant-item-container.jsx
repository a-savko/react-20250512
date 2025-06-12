import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { Restaurant } from './restaurant-item';

export const RestaurantContainer = ({ id }) => {
  const restaurant =
    useSelector((state) => selectRestaurantById(state, id)) || {};
  const { menu, reviews } = restaurant;

  return <Restaurant menu={menu} reviews={reviews} />;
};
