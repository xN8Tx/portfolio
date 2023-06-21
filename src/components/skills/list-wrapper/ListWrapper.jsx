import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import useOnScreen from '../../../hooks/useOnScreen';

import LeftList from '../left-list/LeftList';
import RightList from '../right-list/RightList';

import './ListWrapper.scss';

export default function ListWrapper() {
  const [isAnimationShown, setIsAnimationShown] = useState(false);
  const ref = useRef(null);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (isAnimationShown) return () => {};
    if (!ref) return () => {};
    if (!onScreen) return () => {};

    const targets = document.querySelectorAll('.skills__item > p'); // In file Item.js

    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power1',
      stagger: 0.1,
    });

    setIsAnimationShown(true);
  }, [ref, onScreen]);

  return (
    <div className="skills__wrapper" ref={ref} data-scroll>
      <LeftList />
      <RightList />
    </div>
  );
}
