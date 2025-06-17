import { useContext } from 'react';
import { Button, RIGHT_TEXT_ALIGN } from '../default/button';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import { BLUE, GREEN } from '../../contexts/theme-context/theme-constants';

const reverseTheme = (theme) => (theme === BLUE ? GREEN : BLUE);

export const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    setTheme(reverseTheme);
  };

  const title = `Use ${reverseTheme(theme)} theme`;

  return (
    <Button onClick={handleChangeTheme} textAlignment={RIGHT_TEXT_ALIGN}>
      {title}
    </Button>
  );
};
