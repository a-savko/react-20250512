import { useContext, useEffect } from 'react';
import { RestaurantReviewsContainer } from '../../../components/restaurant-reviews/restaurant-reviews';
import { NavigationContext } from '../../../components/contexts/navigation-context/navigation-context';
import { ROUTE_PATHS } from '../../../constants/router-constants';
import { useParams } from 'react-router';

export const RestaurantReviewsPage = () => {
  const { id } = useParams();

  const { showBackButton, hideBackButton } = useContext(NavigationContext);

  useEffect(() => {
    showBackButton(ROUTE_PATHS.Restaurants, 'Restaurants');

    return () => {
      hideBackButton();
    };
  }, [hideBackButton, showBackButton]);

  return <RestaurantReviewsContainer restaurantId={id} />;
};
