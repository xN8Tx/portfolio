"use client";
import { LocomotiveContext, LocomotiveProvider } from "./locomotive";
import { LanguageContext, LanguageProvider } from "./language";
import { ThemeContext, ThemeProvider } from "./theme";

import type { ChildrenProps } from "@/types";

const Provider = ({ children }: ChildrenProps) => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <LocomotiveProvider>{children}</LocomotiveProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export { Provider, LocomotiveContext, LanguageContext, ThemeContext };
