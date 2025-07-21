import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { Dish } from './dish';
import { selectRestaurantFromResultByDishId } from '../../redux/entities/restaurant/selectors';
import { useGetDishByIdQuery, useGetRestaurantsQuery } from '../../redux/api';

export const DishContainer = ({ id }) => {
  const { data: dish } = useGetDishByIdQuery(id);
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) =>
      selectRestaurantFromResultByDishId(result, id),
  });

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
