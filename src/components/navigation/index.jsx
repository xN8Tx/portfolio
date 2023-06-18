import React from 'react';

import Anchors from './anchors/Anchors';
import Links from './links/Links';

import './index.scss';

export default function Navigation() {
  return (
    <nav className="navigation">
      <Anchors />
      <Links />
    </nav>
  );
}
