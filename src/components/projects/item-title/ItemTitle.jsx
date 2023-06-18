import React from 'react';

import SmallParagraph from '../../../ui/paragraph/small-paragraph/SmallParagraph';

import './ItemTitle.scss';

export default function ItemTitle({ firstName, secondName, skills }) {
  return (
    <div className="projects__title">
      <h3 className="projects__title_text fill">{firstName}</h3>
      <h3 className="projects__title_text stroke">{secondName}</h3>
      <div className="projects__title_skills">
        <SmallParagraph>
          {skills.map((skill, index) => {
            if (index === skills.length - 1) return `${skill}.`;
            return `${skill}, `;
          })}
        </SmallParagraph>
      </div>
    </div>
  );
}
