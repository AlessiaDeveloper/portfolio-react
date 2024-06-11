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
      <div className="flex md:flex-col w-full h-full">
        <div className="flex md:flex-nowrap xs:flex-wrap w-full justify-center align-center h-4/4">
          <TitleCar className="xs" titolo={titoloProgetto} />
          <LinkCarTec github={linkGithub} sito={linkSito} figma={linkFigma} />
        </div>

        <div className="flex w-full h-4/4 ">
          <div className="w-4/6 overflow-hidden">
            {" "}
            <ImgCar immagini={immaginiProgetto} />
          </div>
          <DescriptionCar descrizione={descrizioneProgetto} />
        </div>
      </div>
    </div>
  );
}
