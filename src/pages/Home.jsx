import React from 'react';

import Container from '../layout/Container';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Concept from '../components/concept';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <Container>
      <Header />
      <Navigation />
      <Concept />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Container>
  );
}
