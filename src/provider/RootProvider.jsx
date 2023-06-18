import React from 'react';
import LanguageProvider from './LanguageProvider';
import ThemeProvider from './ThemeProvider';

export default function RootProvider({ children }) {
  return (
    <LanguageProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LanguageProvider>
  );
}
