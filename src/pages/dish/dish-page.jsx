import { useNavigate, useParams } from 'react-router';
import commonStyles from '../../components/app/common.module.css';
import { NavigationContext } from '../../components/contexts/navigation-context/navigation-context';
import { useContext, useEffect } from 'react';
import { DishContainer } from '../../components/dish/dish-container';
import { fillRouteId, ROUTE_PATHS } from '../../constants/router-constants';
import { Loading } from '../../components/loading/loading';
import { useGetDishByIdQuery, useGetRestaurantsQuery } from '../../redux/api';
import { selectRestaurantFromResultByDishId } from '../../redux/entities/restaurant/selectors';

export const DishPage = () => {
  const { id } = useParams();

  const { showBackButton, hideBackButton } = useContext(NavigationContext);
  const { isLoading: isRestaurantsLoading } = useGetRestaurantsQuery();

  const {
    data: dish,
    isLoading: isDishLoading,
    isError: isDishError,
  } = useGetDishByIdQuery(id);

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) =>
      selectRestaurantFromResultByDishId(result, id),
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (!dish && isDishError) {
      navigate(ROUTE_PATHS.NotFound, { replace: true });
      return;
    }
  }, [dish, isDishError, navigate]);

  useEffect(() => {
    // Show back button when restaurant data is loaded
    if (restaurant) {
      const { id, name } = restaurant;
      showBackButton(fillRouteId(ROUTE_PATHS.RestaurantDetails, id), name);
    }

    return () => {
      hideBackButton();
    };
  }, [hideBackButton, restaurant, showBackButton]);

  if ((!restaurant && isRestaurantsLoading) || (!dish && isDishLoading)) {
    return <Loading />;
  }

  return (
    <div className={commonStyles.container}>
      <DishContainer id={id} />
    </div>
  );
};
