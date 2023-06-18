import React from 'react';

import useText from '../../../hooks/useText';

import Item from '../item/Item';

import './List.scss';

export default function List() {
  const projects = useText().projects;

  return (
    <div className="projects__list">
      {projects.map((project, index) => (
        <Item
          key={index}
          index={index}
          firstName={project.firstName}
          secondName={project.secondName}
          skills={project.skills}
          github={project.github}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
}
