import { useContext, useEffect } from 'react';
import { RestaurantMenuContainer } from '../../../components/restaurant-menu/restaurant-menu';
import { NavigationContext } from '../../../components/contexts/navigation-context/navigation-context';
import { ROUTE_PATHS } from '../../../constants/router-constants';

export const RestaurantMenuPage = () => {
  const { showBackButton, hideBackButton } = useContext(NavigationContext);

  useEffect(() => {
    showBackButton(ROUTE_PATHS.Restaurants, 'Restaurants');

    return () => {
      hideBackButton();
    };
  }, [hideBackButton, showBackButton]);
  return <RestaurantMenuContainer />;
};
