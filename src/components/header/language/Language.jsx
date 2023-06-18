import React, { useContext } from 'react';

import LanguagesContext from '../../../context/LanguageContext';

import SmallParagraph from '../../../ui/paragraph/small-paragraph/SmallParagraph';

export default function Language() {
  const { language, setLanguage } = useContext(LanguagesContext);

  const onLanguageChange = () => {
    if (language === 'en') return setLanguage('ru');
    return setLanguage('en');
  };

  return <SmallParagraph onClick={onLanguageChange}>{language}</SmallParagraph>;
}
