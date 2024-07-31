import { useContext } from "react";

import { Paragraph } from "@u";
import { LanguageContext } from "@p";

const Language = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const onLanguageChange = () => {
    if (language === "en") return setLanguage("ru");
    return setLanguage("en");
  };

  const selectedLanguage = language === "en" ? language : "рус";

  return (
    <Paragraph size="small" onClick={onLanguageChange}>
      {selectedLanguage}
    </Paragraph>
  );
};

export { Language };
