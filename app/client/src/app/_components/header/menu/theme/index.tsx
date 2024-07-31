import { useContext } from "react";

import { ThemeContext } from "@p";
import { DarkTheme, LightTheme } from "@a/icons";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeThemeHanlder = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {theme === "dark" && <DarkTheme onClick={changeThemeHanlder} />}
      {theme === "light" && <LightTheme onClick={changeThemeHanlder} />}
    </>
  );
};

export { Theme };
