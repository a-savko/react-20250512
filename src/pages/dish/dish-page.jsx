import { useNavigate, useParams } from 'react-router';
import commonStyles from '../../app/common.module.css';
import { NavigationContext } from '../../components/contexts/navigation-context/navigation-context';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantByDishId } from '../../redux/entities/restaurants/slice';
import { DishContainer } from '../../components/dish/dish-container';
import { fillRouteId, ROUTE_PATHS } from '../../constants/router-constants';

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
    showBackButton(fillRouteId(ROUTE_PATHS.RestaurantDetails, id), name);

    return () => {
      hideBackButton();
    };
  }, [dish, hideBackButton, navigate, showBackButton]);

  return (
    <div className={commonStyles.container}>
      <DishContainer id={id} />
    </div>
  );
};
