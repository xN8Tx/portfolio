import { useContext, useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import Image from "next/image";

import { LanguageContext } from "@/models";
import { Paragraph } from "@/ui/kit";
import { useIcon } from "@/hooks";

import type { Project } from "@/types";

type ItemProps = Project & {
  isSecond: boolean;
  index: number;
};

const Item = ({
  image,
  name,
  skills,
  github,
  isSecond,
  index,
  link,
}: ItemProps) => {
  const {
    languageData: { demo, see },
  } = useContext(LanguageContext);

  const imageWrapperRef = useRef<HTMLAnchorElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef(null);

  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      // @ts-ignore
      lottieRef.current.goToAndStop(0, 0);
    }
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    // @ts-ignore
    if (lottieRef.current) lottieRef.current.goToAndStop(0, 0);
  }, [lottieRef]);

  useEffect(() => {
    if (!imageWrapperRef) return;
    if (!imageWrapperRef.current) return;
    if (window.innerWidth <= 1124) return;

    imageWrapperRef.current.addEventListener("mousemove", (event) => {
      imageWrapperRef.current!.style.cssText = `cursor: none`;
      linkRef.current!.style.cssText = `
        opacity: 0.8; 
        left:${event.offsetX - 65}px; 
        top:${event.offsetY - 65}px`;
    });

    imageWrapperRef.current.addEventListener("mouseout", () => {
      linkRef.current!.style.opacity = "0";
    });
  }, [imageWrapperRef]);

  const scrollSpeed = window.innerWidth >= 1124 ? 2 * index : 1;

  return (
    <div
      className="projects-item"
      data-scroll
      data-scroll-speed={isSecond ? `${scrollSpeed}` : "1"}
    >
      <a
        href={link}
        className="projects-item__image"
        data-scroll
        ref={imageWrapperRef}
      >
        <div className="projects-item__image_wrapper" data-scroll>
          <Image
            width={200}
            height={200}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={image}
            alt={name}
            priority
          />
        </div>
        <div className="projects-item__image_link" ref={linkRef}>
          {see} {demo}
        </div>
      </a>
      <div className="projects-item__information">
        <div className="projects-item__information_text">
          <Paragraph size="regular">{name}</Paragraph>
          <Paragraph size="regular">{skills.join(", ")}</Paragraph>
        </div>
        <div className="projects-item__information_link">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
          >
            <Lottie
              // @ts-ignore
              lottieRef={lottieRef}
              play={isHover}
              animationData={useIcon("git") as JSON}
              style={{ width: "48px", height: "48px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Item };
