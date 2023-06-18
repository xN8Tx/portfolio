import { createContext } from 'react';

const themes = {
  dark: 'dark',
  light: 'light',
};

const ThemeContext = createContext({});

export default ThemeContext;
export { themes };
