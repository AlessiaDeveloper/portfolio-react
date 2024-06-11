import React, { useState } from "react";
import Carosello1 from "./Carosello/Carosello1";
import ButtonCar from "./UI/ButtonCar";
import Carosello2 from "./Carosello/Carosello2";
import { CaroselloProvider } from "./Context/CarContext";
import { IoCaretBackCircle } from "react-icons/io5";
import datiProgetti from "../data/projects.json";

export default function Carosello() {
  const [showCarosello1, setShowCarosello1] = useState(true);
  const [progettoSelezionato, setProgettoSelezionato] = useState(null);

  const toggleCarosello = () => {
    if (!showCarosello1) {
      setProgettoSelezionato(null);
    }
    setShowCarosello1(!showCarosello1);
  };
  const mostraDettagliProgetto = (id) => {
    setProgettoSelezionato(id);
  };
  const progetti = datiProgetti.projects;

  return (
    <CaroselloProvider>
      <div
        style={{ backgroundColor: "var(--rosetto)" }}
        id="myWork"
        className="my-14 "
      >
        <Carosello1>
          <div
            id="carosello-1"
            className={`flex md:flex-wrap xs:flex-wrap xs:mx-2 md:mx-auto justify-center border-4 md:gap-5 xs:gap-3 decoration-red-200 border-double rounded-md  md:p-14 xs:p-10 my-14  ${
              showCarosello1 ? "" : "hidden"
            }`}
            style={{
              color: "var(--rosetto)",
              backgroundColor: "var(--violone)",
              borderColor: "var(--rosone)",
            }}
          >
            {progetti.map((progetto) => {
              return (
                <ButtonCar
                  key={progetto.id}
                  onClick={() => {
                    toggleCarosello();
                    mostraDettagliProgetto(progetto.id);
                  }}
                >
                  {progetto.title}
                </ButtonCar>
              );
            })}
          </div>
          <div
            id="carosello-2"
            className={`md:w-3/4 xs:w-4/4 xs:mx-2 md:mx-auto md:flex-nowrap xs:flex-wrap flex justify-center rounded-md  my-14 ${
              showCarosello1 ? "hidden" : ""
            }`}
            style={{
              color: "var(--rosetto)",
              backgroundColor: "var(--rosone)",
            }}
          >
            <ButtonCar
              onClick={toggleCarosello}
              style={{
                padding: "5px",
              }}
            >
              <IoCaretBackCircle style={{ fontSize: "40px" }} />
            </ButtonCar>
            {progettoSelezionato && (
              <Carosello2
                titoloProgetto={
                  progetti.find((p) => p.id === progettoSelezionato).title
                }
                descrizioneProgetto={
                  progetti.find((p) => p.id === progettoSelezionato).description
                }
                immaginiProgetto={
                  progetti.find((p) => p.id === progettoSelezionato)
                    .carouselImages
                }
                linkGithub={
                  progetti.find((p) => p.id === progettoSelezionato).links
                    .github
                }
                linkFigma={
                  progetti.find((p) => p.id === progettoSelezionato).links.figma
                }
                linkSito={
                  progetti.find((p) => p.id === progettoSelezionato).links
                    .website
                }
              />
            )}
          </div>
        </Carosello1>
      </div>
    </CaroselloProvider>
  );
}
