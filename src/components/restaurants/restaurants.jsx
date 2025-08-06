import { useContext } from 'react';
import { RestaurantTabButton } from '../buttons/restaurant-tab-button/restaurant-tab-button';
import { NoData } from '../common/no-data';

import commonStyles from '../../app/common.module.css';

import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';

export const Restaurants = ({ restaurants }) => {
  const { theme } = useContext(ThemeContext);

  if (!restaurants?.length) {
    return <NoData />;
  }

  return (
    <div className={classNames(commonStyles.container, theme)}>
      <div className={commonStyles.tabTitles}>
        {restaurants.map(({ id, name }) => {
          return <RestaurantTabButton key={id} id={id} name={name} />;
        })}
      </div>
    </div>
  );
};
