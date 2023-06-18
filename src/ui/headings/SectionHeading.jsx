import React from 'react';

import style from './SectionHeading.module.scss';

export default function SectionHeading({ children }) {
  return <h2 className={style.heading}>{children}</h2>;
}
