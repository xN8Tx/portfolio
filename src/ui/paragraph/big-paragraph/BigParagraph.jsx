import React, { forwardRef } from 'react';

import style from './BigParagraph.module.scss';

const BigParagraph = forwardRef(function BigParagraph({ children, ...props }, ref) {
  return (
    <p className={style.paragraph} ref={ref} {...props}>
      {children}
    </p>
  );
});

export default BigParagraph;
