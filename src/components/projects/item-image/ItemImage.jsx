import React from 'react';

import useText from '../../../hooks/useText';

import LazyImage from '../../../ui/image/LazyImage';

import './ItemImage.scss';

export default function ItemImage({ link, image }) {
  const { see, demo } = useText();

  return (
    <div className="projects__image">
      <LazyImage src={image} />
      <a href={link} className="projects__image_button">
        {see} {demo}
      </a>
    </div>
  );
}
