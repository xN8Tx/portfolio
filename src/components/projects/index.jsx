import React from 'react';

import List from './list/List';

import './index.scss';

export default function Projects() {
  return (
    <section className="projects" id="projects" data-scroll-section>
      <List />
    </section>
  );
}
