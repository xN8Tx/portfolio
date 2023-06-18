import React, { useState } from 'react';

import style from './LazyImage.module.scss';

export default function LazyImg({ src, alt, className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const onImgLoaded = () => setIsLoaded(true);

  return (
    <div className={`${className} ${style.container}`} data-load={isLoaded} {...props}>
      <img src={src} alt={alt} className={style.image} onLoad={onImgLoaded} />
    </div>
  );
}
