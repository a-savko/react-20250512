import classNames from 'classnames';
import styles from './tab-button.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../../contexts/theme-context/theme-constants';

export const TabButton = ({ title, isActive, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={classNames(styles.tabButton, {
        [styles.active]: isActive,
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
      disabled={isActive}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
