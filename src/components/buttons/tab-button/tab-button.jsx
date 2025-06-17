import classNames from 'classnames';
import styles from './tab-button.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../../contexts/theme-context/theme-constants';
import { NavLink } from 'react-router';

export const TabButton = ({ title, href }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        classNames(styles.tabButton, {
          [styles.active]: isActive,
          [styles.blue]: theme === BLUE,
          [styles.green]: theme === GREEN,
        })
      }
    >
      {title}
    </NavLink>
  );
};
