import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { useSelector } from 'react-redux';
import { Dish } from './dish';
import { selectDishById } from '../../redux/entities/dish/slice';
import { selectRestaurantByDishId } from '../../redux/entities/restaurant/slice';

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const restaurant = useSelector((state) =>
    selectRestaurantByDishId(state, id)
  );
  const { isAuthorized } = useContext(AccountContext);

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <Dish
      id={id}
      name={name}
      price={price}
      ingredients={ingredients}
      restaurantName={restaurant?.name}
      showDishCounter={isAuthorized}
    />
  );
};
