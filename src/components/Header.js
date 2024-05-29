import React from "react";
import gatto from "./../assets/gatto.jpg";
import Botton from "./UI/Botton";
import AnimatedTitle from "./UI/AnimatedTitle";
import TestoAnimato from "./UI/TestoAnimato";
export default function Header() {
  return (
    <div id="aboutMe">
      <AnimatedTitle
        className="w-4/4 mx-5 my-10 "
        style={{ color: "var(--rosetto)" }}
      >
        About ME
      </AnimatedTitle>
      <div className="flex my- p-5 mx-5 ">
        <div className="w-2/4 p-8 " style={{ color: "var(--rosetto)" }}>
          <TestoAnimato>
            {" "}
            Sono una sviluppatrice full stack con un anno di esperienza
            acquisita sia in azienda che nello sviluppo di progetti personali.
            Attualmente, sono alla ricerca di un’opportunità che mi permetta di
            continuare il mio percorso professionale nel campo della
            programmazione frontend. L’obiettivo è crescere sia come individuo
            che come professionista. Tra le mie competenze, spiccano il problem
            solving e la capacità di lavorare sia autonomamente che in gruppo.
          </TestoAnimato>
          <div className="flex justify-center mt-3">
            <a href="/cv.pdf" download="Cv Mori Alessia">
              <Botton>Curriculum</Botton>
            </a>
            <a href="mailto:alessia.developer%40gmail.com?subject=Richiesta%20Informazioni&body=Gentile%20Alessia">
              <Botton>Email</Botton>
            </a>
          </div>
        </div>
        <div className="w-2/4 flex justify-center mr-12 p-5">
          <img className="w-64 h-64" src={gatto} alt="gatto"></img>
        </div>
      </div>
    </div>
  );
}
