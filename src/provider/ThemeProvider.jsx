import React, { useEffect, useState } from 'react';

import ThemeContext, { themes } from '../context/ThemeContext';

const getTheme = () => {
  const localStorageTheme = localStorage.getItem('theme');
  if (Object.values(themes).includes(localStorageTheme)) {
    return localStorageTheme;
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return themes.dark;
  return themes.light;
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
