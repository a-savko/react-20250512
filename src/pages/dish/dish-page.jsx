import { useNavigate, useParams } from 'react-router';
import commonStyles from '../../app/common.module.css';
import { NavigationContext } from '../../components/contexts/navigation-context/navigation-context';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantByDishId } from '../../redux/entities/restaurants/slice';
import { DishContainer } from '../../components/dish/dish-container';
import { fillRouteId, ROUTE_PATHS } from '../../constants/router-constants';
import { getDishThunk } from '../../redux/entities/dish/get-dish';
import { getRestaurantsThunk } from '../../redux/entities/restaurants/get-restaurants';
import { isLoading, isRejected } from '../../helpers/statuses-helper';
import { selectDishById } from '../../redux/entities/dish/slice';
import { Loading } from '../../components/loading/loading';
import { useRequest } from '../../redux/hooks/use-request';

export const DishPage = () => {
  const { id } = useParams();

  const { showBackButton, hideBackButton } = useContext(NavigationContext);

  const restaurantsRequestsStatus = useRequest(getRestaurantsThunk);
  const dishRequestStatus = useRequest(getDishThunk, id);

  const restaurant = useSelector((state) =>
    selectRestaurantByDishId(state, id)
  );
  const dish = useSelector((state) => selectDishById(state, id));

  const navigate = useNavigate();
  useEffect(() => {
    if (!dish && isRejected(dishRequestStatus)) {
      navigate(ROUTE_PATHS.NotFound, { replace: true });
      return;
    }
  }, [dish, dishRequestStatus, navigate]);

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

  if (
    isLoading(restaurantsRequestsStatus) ||
    isLoading(dishRequestStatus) ||
    (!dish && !isRejected(dishRequestStatus))
  ) {
    return <Loading />;
  }

  return (
    <div className={commonStyles.container}>
      <DishContainer id={id} />
    </div>
  );
};
