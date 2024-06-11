import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#intro-slider", { xPercent: -100, duration: 1.3, delay: 0.3 })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: 30,
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: -30,
          stagger: 0.5,
          delay: 0.3,
        })
        .to("#intro-slider", { xPercent: -100, duration: 1.3 })
        .from("#welcome", { opacity: 0, duration: 0.5 });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="md:p-12 xs:p-6  absolute top-0 left-0 z-10 w-full flex flex-column gap-10 tracking-tight justify-center place-items-center"
        style={{ color: "var(--rosetto)", backgroundColor: "var(--violone)" }}
      >
        <h1 className="md:text-7xl xs:text-2xl " id="title-1">
          Frontend dev
        </h1>
        <h1 className="md:text-7xl xs:text-2xl" id="title-2">
          Mobile dev
        </h1>
        <h1 className="md:text-7xl xs:text-2xl" id="title-3">
          Designer
        </h1>
      </div>
      <div
        className="md:p-12 xs:p-6 flex justify-center place-items-center"
        style={{ color: "var(--violone)", backgroundColor: "var(--rosetto)" }}
      >
        <h1
          id="welcome"
          className="md:text-7xl xs:text-4xl font-bold"
          style={{ color: "var(--violetto)" }}
        >
          Alessia Mori
        </h1>
      </div>
    </div>
  );
}
