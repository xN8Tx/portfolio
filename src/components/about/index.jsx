import React from 'react';

import useText from '../../hooks/useText';

import SectionHeading from '../../ui/headings/SectionHeading';
import BigParagraph from '../../ui/paragraph/big-paragraph/BigParagraph';
import ButtonAnchor from '../../ui/anchors/ButtonAnchor/ButtonAnchor';

import './index.scss';

export default function About() {
  const { about, aboutText, aboutButton, see } = useText();

  return (
    <section className="about" id="about">
      <SectionHeading>{about}</SectionHeading>
      <BigParagraph>{aboutText}</BigParagraph>
      <ButtonAnchor href="#projects" hoverText={see}>
        {aboutButton}
      </ButtonAnchor>
    </section>
  );
}
