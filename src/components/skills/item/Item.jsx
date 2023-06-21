import React from 'react';

import addZeroToNum from '../../../utils/addZeroToNum';

import BigParagraph from '../../../ui/paragraph/big-paragraph/BigParagraph';

import './Item.scss';

export default function Item({ skillIndex, skill }) {
  return (
    <li className="skills__item">
      <BigParagraph>
        {addZeroToNum(skillIndex)}. {skill}
      </BigParagraph>
    </li>
  );
}
