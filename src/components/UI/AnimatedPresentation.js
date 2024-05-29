import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle(props) {
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
          delay: gsap.utils.random(0, 3), // Ritardo casuale tra 0 e 2 secondi
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: text,
            start: "top 80%", // Quando il top del trigger è al 80% del viewport
            toggleActions: "play none none none", // Azioni: play, pause, resume, reverse
            markers: false, // Mostra marcatori di ScrollTrigger per debugging
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex justify-center  ">
      <h1
        ref={headingRef}
        className="border-double  font-bold border-4 underline decoration-red-200 rounded-md p-5"
        style={{
          borderColor: "var(--rosone)",
          backgroundColor: "var(--violetto)",
          color: "var(--rosetto)",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {props.children}
      </h1>
    </div>
  );
}
