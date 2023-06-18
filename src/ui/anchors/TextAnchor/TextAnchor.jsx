import React from 'react';

import style from './TextAnchor.module.scss';

export default function TextAnchor({ href, children }) {
  return (
    <a href={href} className={style.TextAnchor}>
      {children}
    </a>
  );
}
