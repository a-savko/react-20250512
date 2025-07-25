import { Outlet, useNavigate, useParams } from 'react-router';
import { TabButton } from '../../../components/buttons/tab-button/tab-button';
import commonStyles from '../../../components/app/common.module.css';
import { useContext, useEffect } from 'react';
import { ROUTE_PATHS } from '../../../constants/router-constants';
import classNames from 'classnames';
import { ThemeContext } from '../../../components/contexts/theme-context/theme-context';
import { Loading } from '../../../components/loading/loading';
import { useGetRestaurantByIdQuery } from '../../../redux/api';

const MENU_TAB = 'menu';
const REVIEWS_TAB = 'reviews';

export const RestaurantPage = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();

  const {
    data: restaurant,
    isLoading: isRestaurantLoading,
    isError: isRestaurantError,
  } = useGetRestaurantByIdQuery(id);

  const navigate = useNavigate();

  useEffect(() => {
    if (!restaurant && isRestaurantError) {
      navigate(ROUTE_PATHS.NotFound, { replace: true });
      return;
    }
  }, [isRestaurantError, navigate, restaurant]);

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
          href={ROUTE_PATHS.RestaurantMenu}
        />
        <TabButton
          key={REVIEWS_TAB}
          title={'Reviews'}
          href={ROUTE_PATHS.RestaurantReviews}
        />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
