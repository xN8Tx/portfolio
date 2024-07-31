import { createContext } from "react";

import type { Dispatch, SetStateAction } from "react";
import type { LanguageContent, Loading } from "@m";

type LanuageType = "ru" | "en";

type Context = {
  language: LanuageType;
  languageLoading: Loading;
  languageData: LanguageContent;
  setLanguage: Dispatch<SetStateAction<LanuageType>>;
};

const Context = createContext({} as Context);

export type { LanuageType };
export { Context };
