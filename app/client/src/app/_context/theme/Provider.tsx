"use client";
import { useEffect, useState } from "react";
import { Context } from "./Context";

import type { ChildrenProps } from "@m";

const getTheme = () => {
  if (typeof localStorage === "undefined") return "dark";
  if (typeof window == undefined) return "dark";

  const localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme === "dark" || localStorageTheme === "light") {
    return localStorageTheme;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

const Provider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    if (typeof localStorage === "undefined") return () => {};
    if (typeof document === "undefined") return () => {};
    if (typeof window == undefined) return () => {};

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
};

export { Provider };
