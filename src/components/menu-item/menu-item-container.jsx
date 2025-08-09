import { useContext } from 'react';
import { AccountContext } from '@/components/contexts/account-context/account-context';
import { MenuItem } from './menu-item';
import { useGetDishesQuery } from '@/redux/api';
import { selectDishFromResultById } from '@/redux/entities/dish/selectors';

export const MenuItemContainer = ({ dishId, restaurantId }) => {
  const { isAuthorized } = useContext(AccountContext);
  const { data: dish } = useGetDishesQuery(restaurantId, {
    selectFromResult: (result) => selectDishFromResultById(result, dishId),
  });

  const { id, name, price, ingredients } = dish || {};

  return (
    <MenuItem
      id={id}
      name={name}
      price={price}
      ingredients={ingredients}
      showDishCounter={isAuthorized}
    />
  );
};
