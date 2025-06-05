import { NoData } from '../common/no-data';
import { MenuItem } from '../menu-item/menu-item';

import styles from './menu-list.module.css';

export const Menu = ({ menuItems }) => {
  return (
    <div className={styles.menu}>
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
