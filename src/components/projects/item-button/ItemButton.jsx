import React from 'react';

import useText from '../../../hooks/useText';

import GitHub from '../../../assets/GitHub.jsx';

import './ItemButton.scss';

export default function ItemButton({ github }) {
  const { code, see } = useText();

  return (
    <div className="projects__button">
      <a href={github} className="projects__button_link">
        {see} {code}
        <GitHub />
      </a>
    </div>
  );
}
