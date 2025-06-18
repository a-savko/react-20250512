import { useNavigate, useParams } from 'react-router';
import commonStyles from '../../app/common.module.css';
import { NavigationContext } from '../../components/contexts/navigation-context/navigation-context';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantByDishId } from '../../redux/entities/restaurants/slice';
import { DishContainer } from '../../components/dish/dish-container';
import {
  ITEM_ID_ROUTE_TEMPLATE,
  ROUTE_PATHS,
} from '../../constants/router-constants';

export const DishPage = () => {
  const { id } = useParams();

  const { showBackButton, hideBackButton } = useContext(NavigationContext);

  const dish = useSelector((state) => selectRestaurantByDishId(state, id));

  const navigate = useNavigate();
  useEffect(() => {
    if (!dish) {
      navigate(ROUTE_PATHS.NotFound);
      return;
    }

    const { id, name } = dish;
    const restaurantDetailsRoutePath = ROUTE_PATHS.RestaurantDetails.replace(
      ITEM_ID_ROUTE_TEMPLATE,
      id
    );
    showBackButton(restaurantDetailsRoutePath, name);

    return () => {
      hideBackButton();
    };
  });

  return (
    <div className={commonStyles.container}>
      <DishContainer id={id} />
    </div>
  );
};
