import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { NoData } from '../common/no-data';
import { Menu } from '../menu-list/menu-list';
import { useParams } from 'react-router';

export const RestaurantMenuContainer = () => {
  const { id } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return <NoData />;
  }

  const { menu } = restaurant;

  return <Menu dishIds={menu} />;
};
