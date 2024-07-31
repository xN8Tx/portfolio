"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@p";

import type { Icons } from "@m";

const useIcon = (icon: Icons) => {
  const { theme } = useContext(ThemeContext);
  const [selectedIcon, setSelectedIcon] = useState<JSON | null>(null);

  const getIcon = async () => {
    const importIcon = await import(`@a/lottie/${theme}/${icon}.json`);

    setSelectedIcon(importIcon);
  };

  useEffect(() => {
    getIcon();
  }, [theme]);

  return selectedIcon;
};

export { useIcon };
