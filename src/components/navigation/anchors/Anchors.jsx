import React from 'react';

import useText from '../../../hooks/useText';

import TextAnchor from '../../../ui/anchors/TextAnchor/TextAnchor';

export default function Anchors() {
  const { anchors } = useText();

  return (
    <ul className="navigation__list">
      {anchors.map((anchor, index) => (
        <li key={index} className="navigation__list_item">
          <TextAnchor href={anchor.href} data-anchor>
            {anchor.name}
          </TextAnchor>
        </li>
      ))}
    </ul>
  );
}
