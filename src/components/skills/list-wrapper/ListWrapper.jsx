import React from 'react';

import LeftList from '../left-list/LeftList';
import RightList from '../right-list/RightList';

import './ListWrapper.scss';

export default function ListWrapper() {
  return (
    <div className="skills__wrapper">
      <LeftList />
      <RightList />
    </div>
  );
}
