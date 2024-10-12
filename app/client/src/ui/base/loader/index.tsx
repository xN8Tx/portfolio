"use client";
import { useEffect } from "react";
import "./index.scss";

type LoaderProps = {
  isSiteLoaded: boolean;
};

const Loader = ({ isSiteLoaded }: LoaderProps) => {
  const setup = () => {
    document.getElementById("site-logo")?.setAttribute("data-isloader", "true");
  };

  const clear = () => {
    document
      .getElementById("site-logo")
      ?.setAttribute("data-isloader", "false");
  };

  useEffect(() => {
    if (isSiteLoaded) clear();
    if (!isSiteLoaded) setup();

    return () => {
      clear();
    };
  }, [isSiteLoaded]);

  return (
    <section className="loader" data-isactive={`${!isSiteLoaded}`}>
      <div className="loader__wrapper">
        <div className="loader__icon"></div>
        <div className="loader__bar">
          <div className="loader__bar_item"></div>
        </div>
      </div>
    </section>
  );
};

export { Loader };
