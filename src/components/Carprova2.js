import React, { useState, useEffect } from "react";
import ButtonCar from "./UI/ButtonCar";
import DescriptionCar from "./DescriptionCar";
import LinkCarTec from "./Carosello/LinkCarTec";
import ImgCar from "./Carosello/ImgCar";
import TitleCar from "./Carosello/TitleCar";

export default function Carprova2(props) {
  const {
    titoloProgetto,
    descrizioneProgetto,
    immaginiProgetto,
    linkGithub,
    linkFigma,
    linkSito,
  } = props;

  return (
    <div>
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full justify-center align-center h-4/4">
          <TitleCar titolo={titoloProgetto} />
          <LinkCarTec github={linkGithub} sito={linkSito} figma={linkFigma} />
        </div>

        <div className="flex w-full h-4/4 ">
          <div className="w-4/6  overflow-hidden">
            {" "}
            <ImgCar immagini={immaginiProgetto} />
          </div>
          <DescriptionCar descrizione={descrizioneProgetto} />
        </div>
      </div>
    </div>
  );
}
