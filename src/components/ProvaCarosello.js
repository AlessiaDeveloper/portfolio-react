import React, { useState } from "react";
import Carosello from "./Carosello/Carosello";
import ButtonCar from "./UI/ButtonCar";
import Carprova2 from "./Carprova2";
import { CaroselloProvider } from "./Context/CarContext";
import { IoCaretBackCircle } from "react-icons/io5";
import datiProgetti from "../data/projects.json";

export default function ProvaCarosello() {
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
        <Carosello>
          border-double text-2xl font-bold border-4 underline decoration-red-200
          rounded-md my-10 p-5
          <div
            id="carosello-1"
            className={`flex justify-center border-4  decoration-red-200 border-double rounded-md mx-auto p-14 my-14  ${
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
            className={`w-3/4 flex justify-center rounded-md mx-auto my-14 ${
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
              <Carprova2
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
        </Carosello>
      </div>
    </CaroselloProvider>
  );
}
