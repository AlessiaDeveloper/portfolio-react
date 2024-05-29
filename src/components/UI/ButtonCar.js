import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const IconGrid = ({ children, onClick }) => {
  const gridRef = useRef();

  useEffect(() => {
    // Anima tutti i bottoni all'interno del gridRef quando il componente viene montato
    gsap.fromTo(
      gridRef.current.children,
      {
        opacity: 0,
        scale: 0.5,
        stagger: 0.1, // ritarda l'inizio di ciascun'animazione per creare un effetto a cascata
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.5, // durata dell'animazione in secondi
        ease: "back.out(1.7)", // tipo di easing per un effetto rimbalzo
      }
    );
  }, []);

  const handleMouseEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1.1,
      duration: 0.2,
      ease: "sine.out",
    });
  };

  const handleMouseLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      duration: 0.2,
      ease: "expo.out",
    });
  };

  return (
    <div
      ref={gridRef}
      className="flex flex-wrap z-0 justify-center items-center gap-4 px-2"
    >
      {React.Children.map(children, (child, index) => (
        <button
          className="w-16 h-16 flex relative justify-center items-center rounded-md hover:bg-rosone-dark hover:outline hover:outline-offset-2"
          style={{ color: "var(--violone)", backgroundColor: "var(--rosone)" }}
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {child}
        </button>
      ))}
    </div>
  );
};

export default IconGrid;
