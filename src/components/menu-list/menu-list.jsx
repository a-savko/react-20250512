import { useContext } from 'react';
import { NoData } from '../common/no-data';

import styles from './menu-list.module.css';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import classNames from 'classnames';
import { MenuItemContainer } from '../menu-item/menu-item-container';

export const Menu = ({ dishes }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames(styles.menu, theme)}>
      {dishes?.length > 0 ? (
        <div>
          {dishes.map((dish) => (
            <MenuItemContainer key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};
