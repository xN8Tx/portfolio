"use client";
import { useContext } from "react";

import { LanguageContext } from "@p";
import { List } from "./list";
import { Heading } from "@u";

import "./index.scss";

const Projects = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <section className="projects" id="projects" data-scroll-section>
      <Heading color="light">{languageData.project}</Heading>
      <List />
    </section>
  );
};

export { Projects };
