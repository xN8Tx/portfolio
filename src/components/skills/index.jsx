import React from 'react';

import useText from '../../hooks/useText';

import SectionHeading from '../../ui/headings/SectionHeading';
import ListWrapper from './list-wrapper/ListWrapper';
import ButtonAnchor from '../../ui/anchors/ButtonAnchor/ButtonAnchor';

import './index.scss';

export default function Skills() {
  const { skills, links, contact } = useText();

  return (
    <section className="skills" id="skills" data-scroll-section>
      <SectionHeading>{skills}</SectionHeading>
      <ListWrapper />
      <ButtonAnchor href={links[1].href} hoverText={links[1].name}>
        {contact}
      </ButtonAnchor>
    </section>
  );
}
