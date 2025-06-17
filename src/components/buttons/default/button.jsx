import { useContext } from 'react';
import styles from './button.module.css';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../../contexts/theme-context/theme-constants';
import classNames from 'classnames';

export const CENTER_TEXT_ALIGN = 'center';
export const LEFT_TEXT_ALIGN = 'left';
export const RIGHT_TEXT_ALIGN = 'right';

export const Button = ({
  children,
  onClick,
  textAlignment = CENTER_TEXT_ALIGN,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type='button'
      style={{ textAlign: textAlignment }}
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
