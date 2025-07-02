import classNames from 'classnames';
import styles from './tab-button.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { NavLink } from 'react-router';

export const TabButton = ({ title, href }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        classNames(styles.tabButton, theme, {
          [styles.active]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
};
