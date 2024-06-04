import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestoAnimato(props) {
  const headingRef = useRef(null);

  useEffect(() => {
    const text = headingRef.current;
    const splitText = text.textContent.split("");
    text.textContent = "";

    splitText.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      text.appendChild(span);
    });

    const letters = Array.from(text.children);
    letters.forEach((letter) => {
      gsap.fromTo(
        letter,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          delay: gsap.utils.random(0, 2),
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });
  }, [props.children]); // Aggiungi props.children come dipendenza

  return (
    <div className="flex justify-center mt-3">
      <h1 ref={headingRef}>{props.children}</h1>
    </div>
  );
}
