import { useSelector } from 'react-redux';
import { TabButton } from '../tab-button/tab-button';
import { selectRestaurantById } from '../../../redux/entities/restaurants/slice';

export const RestaurantTabButton = ({ id, isActive, onClick }) => {
  const restaurant =
    useSelector((state) => selectRestaurantById(state, id)) || {};
  const { name } = restaurant;

  return <TabButton isActive={isActive} onClick={onClick} title={name} />;
};
