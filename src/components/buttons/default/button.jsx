import { useContext } from 'react';
import styles from './button.module.css';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import classNames from 'classnames';

export const Button = ({ children, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type='button'
      className={classNames(styles.button, theme)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
