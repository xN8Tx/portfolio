import React from 'react';

import Wrapper from '../layout/Wrapper';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Concept from '../components/concept';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Concept />
      <About />
      <Skills />
      <Projects />
    </Wrapper>
  );
}
