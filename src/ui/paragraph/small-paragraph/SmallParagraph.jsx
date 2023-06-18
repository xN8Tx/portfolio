import React from 'react';

import style from './SmallParagraph.module.scss';

export default function SmallParagraph({ children, onClick }) {
  return (
    <p className={style.paragraph} onClick={onClick}>
      {children}
    </p>
  );
}
