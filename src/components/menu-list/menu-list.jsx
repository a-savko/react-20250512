import { useContext } from 'react';
import { NoData } from '../common/no-data';
import { MenuItem } from '../menu-item/menu-item';

import styles from './menu-list.module.css';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';
import classNames from 'classnames';

export const Menu = ({ menuItems }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(styles.menu, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
    >
      <h3>Menu</h3>
      {menuItems?.length > 0 ? (
        <div>
          {menuItems.map(({ id, name, price, ingredients }) => (
            <MenuItem
              key={id}
              name={name}
              price={price}
              ingredients={ingredients}
            />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};
