import { Outlet, useNavigate, useParams } from 'react-router';
import { TabButton } from '../../../components/buttons/tab-button/tab-button';
import commonStyles from '../../../app/common.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../../redux/entities/restaurants/slice';
import { useContext, useEffect } from 'react';
import { ROUTE_PATHS } from '../../../constants/router-constants';
import classNames from 'classnames';
import { ThemeContext } from '../../../components/contexts/theme-context/theme-context';
import {
  BLUE,
  GREEN,
} from '../../../components/contexts/theme-context/theme-constants';

const MENU_TAB = 'menu';
const REVIEWS_TAB = 'reviews';

export const RestaurantPage = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const navigate = useNavigate();
  useEffect(() => {
    if (!restaurant) {
      navigate(ROUTE_PATHS.NotFound, { replace: true });
    }
  }, [navigate, restaurant]);

  const { name } = restaurant;

  return (
    <div className={commonStyles.container}>
      <h3>{name}</h3>
      <div
        className={classNames(commonStyles.tabTitles, {
          [commonStyles.blue]: theme === BLUE,
          [commonStyles.green]: theme === GREEN,
        })}
      >
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
