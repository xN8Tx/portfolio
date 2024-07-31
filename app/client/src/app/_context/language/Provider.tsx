"use client";
import { useEffect, useState } from "react";
import { Context } from "./Context";

import type {
  CustomNavigator,
  ChildrenProps,
  Loading,
  LanguageContent,
} from "@m";
import type { LanuageType } from "./Context";

// Function to get user language
const getLanguage = () => {
  if (typeof localStorage === "undefined") return "ru";
  const localStorageLanguage = localStorage.getItem("language");

  const isLanguageSelect =
    localStorageLanguage &&
    (localStorageLanguage === "en" || localStorageLanguage === "ru");

  if (isLanguageSelect) return localStorageLanguage;

  // Common language
  const myNavigator = navigator as CustomNavigator;
  const userLanguage = myNavigator.language || myNavigator.userLanguage;
  const languageRU = ["ru-RU", "ru", "RU"];

  if (!languageRU.includes(userLanguage)) return "en";
  return "ru";
};

export const Provider = ({ children }: ChildrenProps) => {
  const [language, setLanguage] = useState<LanuageType>(getLanguage);
  const [languageLoading, setLanguageLoading] = useState<Loading>("idle");
  const [languageData, setLanguageData] = useState<LanguageContent>(
    {} as LanguageContent,
  );

  const downloadLanguage = async () => {
    if (!language) return null;
    try {
      setLanguageLoading("loading");
      const response = await fetch(`/language/${language}.json`);
      const data = await response.json();

      console.log(data);

      setLanguageLoading("success");
      setLanguageData(data);
    } catch (error) {
      setLanguageLoading("error");
    }
  };

  useEffect(() => {
    if (typeof localStorage === "undefined") return () => {};
    if (typeof document === "undefined") return () => {};
    if (typeof window == undefined) return () => {};

    localStorage.setItem("language", language);
    downloadLanguage();
  }, [language]);

  return (
    <Context.Provider
      value={{ language, languageData, languageLoading, setLanguage }}
    >
      {children}
    </Context.Provider>
  );
};
