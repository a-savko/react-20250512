import { useContext, useEffect } from 'react';
import { RestaurantReviewsContainer } from '../../../components/restaurant-reviews/restaurant-reviews';
import { NavigationContext } from '../../../components/contexts/navigation-context/navigation-context';
import { ROUTE_PATHS } from '../../../constants/router-constants';

export const RestaurantReviewsPage = () => {
  const { showBackButton, hideBackButton } = useContext(NavigationContext);

  useEffect(() => {
    showBackButton(ROUTE_PATHS.Restaurants, 'Restaurants');

    return () => {
      hideBackButton();
    };
  });

  return <RestaurantReviewsContainer />;
};
