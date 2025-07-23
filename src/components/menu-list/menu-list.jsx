import { useContext } from 'react';
import { NoData } from '../common/no-data';

import styles from './menu-list.module.css';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';
import { MenuItemContainer } from '../menu-item/menu-item-container';

export const Menu = ({ dishIds, restaurantId }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames(styles.menu, theme)}>
      {dishIds?.length > 0 ? (
        <div>
          {dishIds.map((dishId) => (
            <MenuItemContainer
              key={dishId}
              dishId={dishId}
              restaurantId={restaurantId}
            />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};
