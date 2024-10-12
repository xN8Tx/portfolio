import { useContext } from "react";

import { DarkTheme, LightTheme } from "@/assets/icons";
import { ThemeContext } from "@/models";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeThemeHanlder = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  if (theme === "dark") return <DarkTheme onClick={changeThemeHanlder} />;
  return <LightTheme onClick={changeThemeHanlder} />;
};

export { Theme };
