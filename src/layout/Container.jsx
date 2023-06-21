import React, { useEffect, useRef, useState } from 'react';

import useLocomotiveScroll from '../hooks/useLocomotiveScroll';

import Loader from '../components/loader/Loader';

import './Container.scss';

export default function Wrapper({ children }) {
  const [timer, setTimer] = useState(3);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useLocomotiveScroll(isPageLoaded);

  const interval = useRef(null);

  const clear = () => {
    window.clearInterval(interval.current);
    setIsPageLoaded(true);
  };

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  });

  useEffect(() => {
    if (timer === 0) clear();
  }, [timer]);

  return (
    <>
      {isPageLoaded ? (
        <main className="container" id="main-container" data-scroll-container>
          {children}
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
}
