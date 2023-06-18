import { useContext } from 'react';

import LanguagesContext from '../context/LanguageContext';

import { textEN, textRU } from '../data/text';

const useText = () => {
  const { language } = useContext(LanguagesContext);

  if (language == 'en') return textEN;
  return textRU;
};

export default useText;
