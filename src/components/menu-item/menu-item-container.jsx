import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { MenuItem } from './menu-item';

export const MenuItemContainer = ({ dish }) => {
  const { id, name, price, ingredients } = dish;

  const { isAuthorized } = useContext(AccountContext);

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
