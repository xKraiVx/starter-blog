"use client";

import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface IScrollTrigger {
  scrolledDistance: number;
  isScrolled: boolean;
  isScrolledDown: boolean;
  isScrolledUp: boolean;
  blockScroll: () => void;
  enableScroll: () => void;
}

const defaultScrollTrigger: IScrollTrigger = {
  scrolledDistance: 0,
  isScrolled: false,
  isScrolledDown: false,
  isScrolledUp: false,
  blockScroll: () => {},
  enableScroll: () => {},
};

export const ScrollTriggerContext =
  createContext<IScrollTrigger>(defaultScrollTrigger);

export const ScrollTriggerProvider = ({ children }: PropsWithChildren) => {
  const blockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "visible";
  };

  const [scrollState, setScrollState] = useState<IScrollTrigger>({
    ...defaultScrollTrigger,
    blockScroll,
    enableScroll,
  });

  const handleScroll = () => {
    const newScrollValue = window.scrollY;
    const isScrolled = window.scrollY !== 0;

    setScrollState((prev) => {
      const prevDistance = prev.scrolledDistance;

      if (prevDistance !== newScrollValue) {
        return {
          ...prev,
          scrolledDistance: newScrollValue,
          isScrolled,
          isScrolledDown: prev.scrolledDistance < newScrollValue,
          isScrolledUp: prev.scrolledDistance > newScrollValue,
        };
      }
      return {
        ...prev,
        scrolledDistance: newScrollValue,
        isScrolled,
      };
    });
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollTriggerContext.Provider value={scrollState}>
      {children}
    </ScrollTriggerContext.Provider>
  );
};
