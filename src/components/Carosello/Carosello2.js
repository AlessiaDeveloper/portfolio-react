import DescriptionCar from "./DescriptionCar";
import LinkCarTec from "./LinkCarTec";
import ImgCar from "./ImgCar";
import TitleCar from "./TitleCar";

export default function Carosello2(props) {
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
      <div className="flex md:flex-col xs:flex-col w-full h-full">
        <div className="flex md:flex-nowrap md:flex-row xs:flex-col w-full justify-center align-center h-4/4">
          <TitleCar titolo={titoloProgetto} />
          <LinkCarTec github={linkGithub} sito={linkSito} figma={linkFigma} />
        </div>

        <div className="flex w-full md:flex-row xs:flex-col h-4/4 ">
          <div className=" md:w-6/6 sm:w-4/6 xl:w-4/6 xs:w-6/6 ">
            {" "}
            <ImgCar immagini={immaginiProgetto} />
          </div>
          <DescriptionCar descrizione={descrizioneProgetto} />
        </div>
      </div>
    </div>
  );
}
