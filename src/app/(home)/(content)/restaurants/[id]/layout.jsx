'use client';

import { useRouter, useParams, notFound } from 'next/navigation';
import { TabButton } from '../../../../../components/buttons/tab-button/tab-button';
import commonStyles from '../../../../common.module.css';
import { useContext, useEffect } from 'react';
import {
  fillRouteId,
  ROUTE_PATHS,
} from '../../../../../constants/router-constants';
import classNames from 'classnames';
import { ThemeContext } from '../../../../../components/contexts/theme-context/theme-context';
import { Loading } from '../../../../../components/loading/loading';
import { useGetRestaurantByIdQuery } from '../../../../../redux/api';

const MENU_TAB = 'menu';
const REVIEWS_TAB = 'reviews';

const RestaurantPage = ({ children }) => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();

  const {
    data: restaurant,
    isLoading: isRestaurantLoading,
    isError: isRestaurantError,
  } = useGetRestaurantByIdQuery(id);

  useEffect(() => {
    if (!restaurant && isRestaurantError) {
      notFound();
    }
  }, [isRestaurantError, router, restaurant]);

  if (isRestaurantLoading) {
    return <Loading />;
  }

  return (
    <div className={classNames(commonStyles.container, theme)}>
      <h3>{restaurant?.name}</h3>
      <div className={commonStyles.tabTitles}>
        <TabButton
          key={MENU_TAB}
          title={'Menu'}
          href={fillRouteId(ROUTE_PATHS.RestaurantMenu, id)}
        />
        <TabButton
          key={REVIEWS_TAB}
          title={'Reviews'}
          href={fillRouteId(ROUTE_PATHS.RestaurantReviews, id)}
        />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default RestaurantPage;
