import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import 'locomotive-scroll/src/locomotive-scroll.scss';

gsap.registerPlugin(ScrollTrigger);

const useLocomotiveScroll = (start) => {
  const locomotiveScroll = useRef(null);

  useEffect(() => {
    if (!start) return () => {};

    const mainContainer = document.querySelector('#main-container');

    locomotiveScroll.current = new LocomotiveScroll({
      el: mainContainer,
      smooth: true,
      multiplier: 1,
      class: 'on-screen',
    });

    const anchrors = document.querySelectorAll('[data-anchor]');

    const anchorScroll = (event) => {
      event.preventDefault();

      const id = event.target.href ? event.target.href.split('#').pop() : event.target.parentNode.href.split('#').pop();

      locomotiveScroll.current.scrollTo(`#${id}`, { offset: 20 });
    };

    anchrors.forEach((anchor) => {
      anchor.addEventListener('click', anchorScroll);
    });

    return () => {
      anchrors.forEach((anchor) => {
        anchor.removeEventListener('click', anchorScroll);
      });
    };
  }, [start]);
};

export default useLocomotiveScroll;
