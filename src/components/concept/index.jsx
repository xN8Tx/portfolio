import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

import './index.scss';

export default function Concept() {
  const firstText = useRef(null);
  const secondText = useRef(null);

  useEffect(() => {
    if (!firstText && !secondText) return () => {};

    const targets = gsap.utils.toArray([firstText.current, secondText.current]);

    gsap.to(targets, {
      duration: 2,
      y: 0,
    });
  }, [firstText, secondText]);

  return (
    <section className="concept" data-scroll-section>
      <div className="concept__text_container">
        <h1 className="concept__text fill" ref={firstText} data-scroll>
          Evgeniy Shteyn
        </h1>
      </div>
      <div className="concept__text_container">
        <h1 className="concept__text stroke" ref={secondText} data-scroll>
          Frontend Dev.
        </h1>
      </div>
    </section>
  );
}
