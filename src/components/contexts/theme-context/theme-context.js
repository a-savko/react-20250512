import { createContext } from 'react';
import { BLUE } from './theme-constants';

export const ThemeContext = createContext({ theme: BLUE, setTheme: () => { } });

