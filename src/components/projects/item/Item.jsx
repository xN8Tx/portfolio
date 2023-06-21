import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import useOnScreen from '../../../hooks/useOnScreen';

import ItemTitle from '../item-title/ItemTitle';
import ItemImage from '../item-image/ItemImage';

import './Item.scss';
import { useState } from 'react';

export default function Item({ name, skills, github, link, image }) {
  const [isAnimationShown, setIsAnimationShown] = useState(false);
  const container = useRef(null);
  const imageBlock = useRef(null);

  const onScreen = useOnScreen(container, '50%');

  useEffect(() => {
    if (isAnimationShown) return () => {};
    if (!container && !imageBlock) return () => {};
    if (!onScreen) return () => {};

    gsap.to(imageBlock.current, {
      opacity: 1,
      y: 0,
      duration: 2,
    });

    setIsAnimationShown(true);
  }, [onScreen, container, imageBlock]);

  return (
    <div className="projects__item" ref={container}>
      <ItemImage link={link} image={image} ref={imageBlock} data-scroll />
      <ItemTitle name={name} skills={skills} github={github} />
    </div>
  );
}
