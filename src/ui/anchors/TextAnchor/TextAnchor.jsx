import React from 'react';

import style from './TextAnchor.module.scss';

export default function TextAnchor({ href, children, ...props }) {
  return (
    <a href={href} className={style.TextAnchor} {...props}>
      {children}
    </a>
  );
}
