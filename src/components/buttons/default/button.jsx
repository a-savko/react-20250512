import { useContext } from 'react';
import styles from './button.module.css';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../../contexts/theme-context/theme-constants';
import classNames from 'classnames';

export const Button = ({ children, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type='button'
      className={classNames(styles.button, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
