import React from 'react';

import Logo from '../../assets/Logo';
import Theme from './theme/Theme';
import Language from './language/Language';

import './index.scss';

export default function Header() {
  return (
    <header className="header" data-scroll-section>
      <Theme />
      <Logo />
      <Language />
    </header>
  );
}
