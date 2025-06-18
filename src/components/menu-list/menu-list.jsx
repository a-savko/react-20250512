import { useContext } from 'react';
import { NoData } from '../common/no-data';

import styles from './menu-list.module.css';
import { ThemeContext } from '../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../contexts/theme-context/theme-constants';
import classNames from 'classnames';
import { MenuItemContainer } from '../menu-item/menu-item-container';

export const Menu = ({ dishIds }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(styles.menu, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
    >
      {dishIds?.length > 0 ? (
        <div>
          {dishIds.map((id) => (
            <MenuItemContainer key={id} id={id} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};
