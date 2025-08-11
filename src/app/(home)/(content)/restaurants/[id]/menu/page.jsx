'use client';

import { useContext, useEffect } from 'react';
import { RestaurantMenuContainer } from '@/components/restaurant-menu/restaurant-menu';
import { NavigationContext } from '@/components/contexts/navigation-context/navigation-context';
import { ROUTE_PATHS } from '@/constants/router-constants';
import { useParams } from 'next/navigation';

const RestaurantMenuPage = () => {
  const { showBackButton, hideBackButton } = useContext(NavigationContext);
  const { id } = useParams();

  useEffect(() => {
    showBackButton(ROUTE_PATHS.Restaurants, 'Restaurants');

    return () => {
      hideBackButton();
    };
  }, [hideBackButton, showBackButton]);

  return <RestaurantMenuContainer restaurantId={id} />;
};

export default RestaurantMenuPage;
