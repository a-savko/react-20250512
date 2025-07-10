import { useSelector } from 'react-redux';
import styles from './basket-item.module.css';
import { selectBasketAmountById } from '../../redux/entities/basket/slice';
import { selectDishById } from '../../redux/entities/dish/slice';

export const BasketItem = ({ dishId }) => {
  const amount = useSelector((state) => selectBasketAmountById(state, dishId));

  // the dish added to basket from a restaurant dishes page
  const dishFromDishesSlice = useSelector((state) =>
    selectDishById(state, dishId)
  );
  // the dish added to basket from a dish details page
  const dishFromDishSlice = useSelector((state) =>
    selectDishById(state, dishId)
  );

  const dish = dishFromDishesSlice || dishFromDishSlice;
  const { name } = dish;

  return (
    <div key={dishId} className={styles.basketItem}>
      <span className={styles.title}>{name}</span>
      <span className={styles.quantity}>x{amount}</span>
    </div>
  );
};
