import React from 'react';

import style from './BigParagraph.module.scss';

export default function BigParagraph({ children }) {
  return <p className={style.paragraph}>{children}</p>;
}
