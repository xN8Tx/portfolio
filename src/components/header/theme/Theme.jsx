import React, { useContext } from 'react';

import ThemeContext from '../../../context/ThemeContext';
import LightTheme from '../../../assets/LightTheme';
import DarkTheme from '../../../assets/DarkTheme';

export default function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const onThemeChange = () => {
    if (theme === 'light') return setTheme('dark');
    return setTheme('light');
  };

  return theme === 'light' ? <LightTheme onClick={onThemeChange} /> : <DarkTheme onClick={onThemeChange} />;
}
