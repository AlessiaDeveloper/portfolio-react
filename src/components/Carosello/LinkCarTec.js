import React, { useRef } from "react";
import ButtonCar from "../UI/ButtonCar";
import { FaGithub, FaFigma } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function LinkCarTec(props) {
  const { figma } = props;
  const containerRef = useRef(null);

  // useEffect(() => {
  //   if (showCarosello1) {
  //     const buttons = containerRef.current.children;
  //     gsap.fromTo(
  //       buttons,
  //       { y: 50, opacity: 0 },
  //       { y: 0, opacity: 1, stagger: 0.2, ease: "bounce.out", duration: 1 }
  //     );
  //   }
  // });

  return (
    <div
      ref={containerRef}
      className="md:w-2/4 xs:w-4/4 py-3 md:rounded-tr-md flex justify-center align-middle grid-rows-3"
      style={{ backgroundColor: "var(--violetto)" }}
    >
      <a href={figma} target="_blank" rel="noopener noreferrer">
        <ButtonCar>
          <FaFigma className="icon" style={{ fontSize: "40px" }}>
            <span className="tooltip">Figma</span>
          </FaFigma>
        </ButtonCar>
      </a>
      <ButtonCar>
        <FaGithub style={{ fontSize: "40px" }} />
      </ButtonCar>
      <ButtonCar>
        <IoLogoGooglePlaystore style={{ fontSize: "40px" }} />
      </ButtonCar>
      <ButtonCar>Website</ButtonCar>
    </div>
  );
}
