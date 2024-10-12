"use client";
import { useContext } from "react";

import { LanguageContext } from "@/models";
import { Item } from "./item";

const List = () => {
  const { languageData } = useContext(LanguageContext);
  const { projects } = languageData;

  return (
    <div className="projects__list" data-scroll>
      {projects.map((project, index) => (
        <Item
          key={index}
          name={project.name}
          skills={project.skills}
          github={project.github}
          link={project.link}
          image={project.image}
          isSecond={(index + 1) % 2 === 0}
          index={index + 1}
        />
      ))}
    </div>
  );
};

export { List };
