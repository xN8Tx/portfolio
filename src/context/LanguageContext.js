import { createContext } from 'react';

const languages = {
  russian: 'ru',
  english: 'en',
};

const LanguagesContext = createContext({});

export default LanguagesContext;
export { languages };
