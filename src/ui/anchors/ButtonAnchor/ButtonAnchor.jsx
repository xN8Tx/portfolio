import React from 'react';

import style from './ButtonAnchor.module.scss';

export default function ButtonAnchor({ href, hoverText, children }) {
  return (
    <div className={style.container}>
      <a href={href} className={style.anchor}>
        <p className={style.text}>{children}</p>
        <p className={style.hover}>{hoverText}</p>
      </a>
    </div>
  );
}
