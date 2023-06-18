import React from 'react';

import useText from '../../../hooks/useText';

import GitHub from '../../../assets/GitHub.jsx';
import Demo from '../../../assets/Demo';

import './ItemButton.scss';

export default function ItemButton({ github, link }) {
  const { code, see, demo } = useText();

  return (
    <div className="projects__button">
      <a href={github} className="projects__button_link">
        {see} {code}
        <GitHub />
      </a>
      <a href={link} className="projects__button_link">
        {see} {demo}
        <Demo />
      </a>
    </div>
  );
}
