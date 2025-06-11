import { useContext } from 'react';
import { AccountContext } from '../contexts/account-context/account-context';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';
import { MenuItem } from './menu-item';

export const MenuItemContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id)) || {};
  const { name, price, ingredients } = dish;

  const { isAuthorized } = useContext(AccountContext);

  return (
    <MenuItem
      name={name}
      price={price}
      ingredients={ingredients}
      showDishCounter={isAuthorized()}
    />
  );
};
