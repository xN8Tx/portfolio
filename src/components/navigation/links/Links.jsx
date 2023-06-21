import React from 'react';
import useText from '../../../hooks/useText';

import TextAnchor from '../../../ui/anchors/TextAnchor/TextAnchor';

export default function Links() {
  const { links } = useText();

  return (
    <ul className="navigation__list">
      {links.map((link, index) => (
        <li key={index} className="navigation__list_item">
          <TextAnchor href={link.href}>{link.name}</TextAnchor>
        </li>
      ))}
    </ul>
  );
}
