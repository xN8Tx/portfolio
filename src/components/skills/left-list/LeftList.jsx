import React from 'react';

import useText from '../../../hooks/useText';

import Item from '../item/Item';

export default function LeftList() {
  const { skillsText } = useText();

  return (
    <ul className="skills__list">
      {skillsText.map((skill, index) => {
        const skillIndex = ++index;

        if (index > 5) return null;
        return <Item key={index} skillIndex={skillIndex} skill={skill} />;
      })}
    </ul>
  );
}
