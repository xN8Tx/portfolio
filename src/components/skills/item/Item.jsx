import React from 'react';

import addZeroToNum from '../../../utils/addZeroToNum';

import BigParagraph from '../../../ui/paragraph/big-paragraph/BigParagraph';

export default function Item({ skillIndex, skill }) {
  return (
    <li>
      <BigParagraph>
        {addZeroToNum(skillIndex)}. {skill}
      </BigParagraph>
    </li>
  );
}
