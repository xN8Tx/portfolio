import React from 'react';

import useText from '../../../hooks/useText';

import TextAnchor from '../../../ui/anchors/TextAnchor/TextAnchor';

export default function Anchors() {
  const { anchors } = useText();

  return (
    <ul className="navigation__list">
      {anchors.map((anchor, index) => (
        <li key={index}>
          <TextAnchor href={anchor.href}>{anchor.name}</TextAnchor>
        </li>
      ))}
    </ul>
  );
}
