import { useContext } from 'react';
import { Button } from '../default/button';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../../contexts/theme-context/theme-constants';

const reverseTheme = (theme) => (theme === BLUE ? GREEN : BLUE);

export const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeThemeClick = () => {
    setTheme(reverseTheme);
  };

  const title = `Use ${reverseTheme(theme)} theme`;

  return <Button onClick={changeThemeClick}>{title}</Button>;
};
