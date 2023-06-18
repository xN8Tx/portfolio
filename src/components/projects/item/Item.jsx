import React from 'react';

import useText from '../../../hooks/useText';
import addZeroToNum from '../../../utils/addZeroToNum';

import SectionHeading from '../../../ui/headings/SectionHeading';
import ItemTitle from '../item-title/ItemTitle';
import ItemImage from '../item-image/ItemImage';
import ItemButton from '../item-button/ItemButton';

import './Item.scss';

export default function Item({ index, firstName, secondName, skills, github, link, image }) {
  const project = useText().project;

  ++index;

  return (
    <div className="projects__item">
      <div className="projects__item_wrapper">
        <SectionHeading>
          {project} {addZeroToNum(index)}
        </SectionHeading>
        <ItemTitle firstName={firstName} secondName={secondName} skills={skills} />
        <ItemButton github={github} link={link} />
      </div>
      <ItemImage link={link} image={image} />
    </div>
  );
}
