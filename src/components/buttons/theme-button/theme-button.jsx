import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../../contexts/theme-context/theme-constants';
import classNames from 'classnames';
import styles from './theme-button.module.css';

const reverseTheme = (theme) => (theme === BLUE ? GREEN : BLUE);

export const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    setTheme(reverseTheme);
  };

  const title = `Use ${reverseTheme(theme)} theme`;

  return (
    <button
      type='button'
      className={classNames(styles.button, {
        [styles.blue]: theme === BLUE,
        [styles.green]: theme === GREEN,
      })}
      onClick={handleChangeTheme}
    >
      {title}
    </button>
  );
};
