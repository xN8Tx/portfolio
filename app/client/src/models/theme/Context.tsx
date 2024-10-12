import { createContext } from "react";

import type { Dispatch, SetStateAction } from "react";

type ThemeKeys = "dark" | "light";

type Context = {
  theme: ThemeKeys;
  setTheme: Dispatch<SetStateAction<ThemeKeys>>;
};

const Context = createContext({} as Context);

export type { ThemeKeys };
export { Context };
