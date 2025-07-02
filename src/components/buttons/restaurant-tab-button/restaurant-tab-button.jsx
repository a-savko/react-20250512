import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../../redux/entities/restaurants/slice';
import { TabButton } from '../tab-button/tab-button';

export const RestaurantTabButton = ({ id }) => {
  const restaurant =
    useSelector((state) => selectRestaurantById(state, id)) || {};
  const { name } = restaurant;

  return <TabButton href={id} title={name} />;
};
