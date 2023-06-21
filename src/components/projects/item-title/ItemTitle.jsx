import React from 'react';

import SmallParagraph from '../../../ui/paragraph/small-paragraph/SmallParagraph';
import ItemButton from '../item-button/ItemButton';

import './ItemTitle.scss';

export default function ItemTitle({ name, skills, github }) {
  return (
    <div className="projects__title">
      <h3 className="projects__title_text">{name}</h3>
      <div className="projects__title_skills">
        <SmallParagraph>
          {skills.map((skill, index) => {
            if (index === skills.length - 1) return `${skill}`;
            return `${skill}, `;
          })}
        </SmallParagraph>
      </div>
      <ItemButton github={github} />
    </div>
  );
}
