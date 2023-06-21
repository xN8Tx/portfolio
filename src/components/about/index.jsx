import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import useOnScreen from '../../hooks/useOnScreen';
import useText from '../../hooks/useText';

import SectionHeading from '../../ui/headings/SectionHeading';
import BigParagraph from '../../ui/paragraph/big-paragraph/BigParagraph';
import ButtonAnchor from '../../ui/anchors/ButtonAnchor/ButtonAnchor';

import './index.scss';

export default function About() {
  const [isAnimationShown, setIsAnimationShown] = useState(false);
  const { about, aboutText, aboutButton, see } = useText();

  const ref = useRef(null);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (isAnimationShown) return () => {};
    if (!ref) return () => {};
    if (!onScreen) return () => {};

    const splitText = new SplitType(ref.current);
    const lines = splitText.lines;

    gsap.to(lines, {
      y: 0,
      opacity: 1,
      duration: 1.3,
      ease: 'power1',
      stagger: 0.1,
    });

    setIsAnimationShown(true);
  }, [ref, onScreen]);

  return (
    <section className="about" id="about" data-scroll-section>
      <SectionHeading>{about}</SectionHeading>
      <BigParagraph ref={ref} data-scroll>
        {aboutText}
      </BigParagraph>
      <ButtonAnchor href="#projects" hoverText={see} data-anchor>
        {aboutButton}
      </ButtonAnchor>
    </section>
  );
}
