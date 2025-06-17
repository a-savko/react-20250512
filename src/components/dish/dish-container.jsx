import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';
import { Dish } from './dish';
import { selectRestaurantByDishId } from '../../redux/entities/restaurants/slice';

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id)) || {};
  const restaurant = useSelector((state) =>
    selectRestaurantByDishId(state, id)
  );
  const { name, price, ingredients } = dish;

  const { isAuthorized } = useContext(AccountContext);

  return (
    <Dish
      id={id}
      name={name}
      price={price}
      ingredients={ingredients}
      restaurantName={restaurant.name}
      showDishCounter={isAuthorized}
    />
  );
};
