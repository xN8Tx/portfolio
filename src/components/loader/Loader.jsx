import React from 'react';

import './Loader.scss';

export default function Loader() {
  return (
    <section className="loader">
      {/*
      NEXT CODE
      COPY FROM 
      https://codepen.io/Fieve/pen/bogzQW 
      */}
      <svg width="0" height="0">
        <filter id="gooey-fill">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
        </filter>
      </svg>
      <div className="fill">
        <div className="gooey-container">
          <span className="level">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
          </span>
        </div>
      </div>
    </section>
  );
}
