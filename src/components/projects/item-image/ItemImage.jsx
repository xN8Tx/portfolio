import React, { forwardRef } from 'react';

import useText from '../../../hooks/useText';

import LazyImage from '../../../ui/image/LazyImage';

import './ItemImage.scss';

const ItemImage = forwardRef(function ItemImage({ link, image, ...props }, ref) {
  const { see, demo } = useText();

  return (
    <div className="projects__image" {...props}>
      <div className="projects__image_container" ref={ref}>
        <LazyImage src={image} />
        <a href={link} className="projects__image_button">
          {see}
          <br />
          {demo}
        </a>
      </div>
    </div>
  );
});

export default ItemImage;
