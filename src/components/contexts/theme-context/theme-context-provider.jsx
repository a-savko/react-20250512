import { useState } from 'react';
import { BLUE } from './theme-constants';
import { ThemeContext } from './theme-context';

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(BLUE);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
