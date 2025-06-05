import { DishCounter } from '../counters/dish-counter';

import style from './menu-item.module.css';

export const MenuItem = ({ name, price, ingredients }) => {
  return (
    <div className={style.menuItem}>
      <div className={style.menuContent}>
        <h4>{name}</h4>
        <p>{ingredients.join(', ')}</p>
        <p className={style.price}>{`${price} BYN`}</p>
      </div>
      <div className={style.dishCounter}>
        <DishCounter />
      </div>
    </div>
  );
};
