import React, { useEffect, useState } from 'react';

import LanguagesContext, { languages } from '../context/LanguageContext';

const getLanguage = () => {
  const localStorageLanguage = localStorage.getItem('language');

  if (Object.values(languages).includes(localStorageLanguage)) return localStorageLanguage;

  // Common language
  const userLanguage = navigator.language || navigator.userLanguage;
  const languageRU = ['ru-RU', 'ru', 'RU'];

  if (!languageRU.includes(userLanguage)) return 'en';
  return 'ru';
};

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return <LanguagesContext.Provider value={{ language, setLanguage }}>{children}</LanguagesContext.Provider>;
}
