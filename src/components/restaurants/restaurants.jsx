import { useContext } from 'react';
import { RestaurantTabButton } from '../buttons/restaurant-tab-button/restaurant-tab-button';
import { NoData } from '../common/no-data';

import commonStyles from '../../app/common.module.css';

import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';

export const Restaurants = ({ restaurantIds }) => {
  const { theme } = useContext(ThemeContext);

  if (!restaurantIds?.length) {
    return <NoData />;
  }

  return (
    <div className={classNames(commonStyles.container, theme)}>
      <div className={commonStyles.tabTitles}>
        {restaurantIds.map((id) => {
          return <RestaurantTabButton key={id} id={id} />;
        })}
      </div>
    </div>
  );
};
