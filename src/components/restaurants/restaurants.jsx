import { useContext } from 'react';
import { RestaurantTabButton } from '../buttons/restaurant-tab-button/restaurant-tab-button';
import { NoData } from '../common/no-data';

import styles from './restaurants.module.css';
import commonStyles from '../../app/common.module.css';

import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';

export const Restaurants = ({ restaurantIds }) => {
  const { theme } = useContext(ThemeContext);

  if (!restaurantIds?.length) {
    return <NoData />;
  }

  return (
    <>
      <div className={commonStyles.container}>
        <div
          className={classNames(commonStyles.tabTitles, {
            [commonStyles.blue]: theme === BLUE,
            [commonStyles.green]: theme === GREEN,
          })}
        >
          {restaurantIds.map((id) => {
            return <RestaurantTabButton key={id} id={id} />;
          })}
        </div>
      </div>
    </>
  );
};
