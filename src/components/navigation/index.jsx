import React from 'react';

import Anchors from './anchors/Anchors';
import Links from './links/Links';

import './index.scss';

export default function Navigation() {
  return (
    <nav className="navigation" data-scroll-section>
      <Anchors />
      <Links />
    </nav>
  );
}
