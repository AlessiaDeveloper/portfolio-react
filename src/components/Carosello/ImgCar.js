// ImgCar.js (componente nipote)
import React from "react";
import { TECarouselItem, TECarousel } from "tw-elements-react";

export default function ImgCar(props) {
  const { immagini } = props;

  return (
    <div>
      <TECarousel showIndicators={true} ride="carousel">
        <div className=" relative md:w-5/5 xs:w-5/5   overflow-hidden after:clear-both after:block after:content-['']">
          {immagini.map((immagine, index) => (
            <TECarouselItem
              key={index}
              itemID={index + 1}
              className="relative justify-center float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out "
            >
              {/* le immagini devono essere della stessa dimensione, se no si sfalda  */}
              <img
                src={immagine}
                className="flex  md:w-[750px] h-[300px]" // Imposta l'altezza fissa desiderata
                alt={`Immagine ${index + 1}`}
              />
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </div>
  );
}
