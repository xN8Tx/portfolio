"use client";
import { useContext } from "react";

import { LanguageContext, LocomotiveContext } from "@/models";

import { Loader } from "../loader";
import { Header } from "../header";

import { Footer } from "../footer";

import type { ChildrenProps } from "@/types";

const Wrapper = ({ children }: ChildrenProps) => {
  const { languageLoading } = useContext(LanguageContext);
  const { locomotiveContainerRef, locomotiveLoading } =
    useContext(LocomotiveContext);

  const isSiteLoaded =
    languageLoading === "success" && locomotiveLoading === "success";

  return (
    <main
      id="main-container"
      data-scroll-container
      ref={locomotiveContainerRef}
    >
      <Loader isSiteLoaded={isSiteLoaded} />
      {languageLoading === "success" && (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </main>
  );
};

export { Wrapper };
