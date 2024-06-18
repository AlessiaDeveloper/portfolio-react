import React from "react";
import Card from "./UI/Card";
import Icon from "./UI/Icon";
import {
  FaReact,
  FaAngular,
  FaLaravel,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaBootstrap,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaTrello,
  FaJira,
} from "react-icons/fa";
import { RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";
import { TbSql, TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import {
  SiDart,
  SiAndroidstudio,
  SiTypescript,
  SiRedux,
  SiLivewire,
  SiCanva,
  SiReactrouter,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import AnimatedTitle from "./UI/AnimatedTitle";

export default function SectionTec() {
  return (
    <>
      <div id="myTec">
        <AnimatedTitle>My TECHNOLOGY</AnimatedTitle>
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-0 place-items-center mx-12 p-4">
        <Card>
          <h1 className="text-lg font-bold mb-3 ">Linguaggi</h1>
          <div className="flex flex-wrap p-3 text-xl gap-4">
            <Icon>
              <IoLogoJavascript className="icon" />
              <span className="tooltip">JavaScript</span>
            </Icon>
            <Icon>
              <SiDart className="icon" />
              <span className="tooltip">Dart</span>
            </Icon>
            <Icon>
              <FaHtml5 className="icon" />
              <span className="tooltip">Html</span>
            </Icon>
            <Icon>
              <FaCss3 className="icon" />
              <span className="tooltip">Css</span>
            </Icon>
            <Icon>
              <FaPhp className="icon" />
              <span className="tooltip">Php</span>
            </Icon>
            <Icon>
              <TbSql className="icon" />
              <span className="tooltip">Sql</span>
            </Icon>
            <Icon>
              <SiTypescript className="icon" />
              <span className="tooltip">Typescript</span>
            </Icon>
          </div>
        </Card>
        <Card>
          <h1 className="text-lg font-bold mb-2">Framework</h1>
          <div className="flex flex-wrap p-3 text-xl gap-4">
            <Icon>
              <FaAngular className="icon" />
              <span className="tooltip">Angular</span>
            </Icon>
            <Icon>
              <RiFlutterFill className="icon" />
              <span className="tooltip">Flutter</span>
            </Icon>
            <Icon>
              <FaLaravel className="icon" />
              <span className="tooltip">Laravel</span>
            </Icon>
            <Icon>
              <TbBrandReactNative className="icon" />
              <span className="tooltip">React Native</span>
            </Icon>
          </div>
        </Card>
        <Card>
          <h1 className="text-lg font-bold mb-2">Software</h1>
          <div className="flex flex-wrap p-3 text-xl gap-4">
            <Icon>
              <VscVscode className="icon" />
              <span className="tooltip">VSCode</span>
            </Icon>
            <Icon>
              <SiAndroidstudio className="icon" />
              <span className="tooltip">AndroidStudio</span>
            </Icon>
            <Icon>
              <FaNode className="icon" />
              <span className="tooltip">Node.js</span>
            </Icon>
            <Icon>
              <FaGithub className="icon" />
              <span className="tooltip">Github</span>
            </Icon>
            <Icon>
              <FaGitAlt className="icon" />
              <span className="tooltip">Git</span>
            </Icon>
            <Icon>
              <SiCanva className="icon" />
              <span className="tooltip">Canva</span>
            </Icon>
            <Icon>
              <IoLogoFigma className="icon" />
              <span className="tooltip">Figma</span>
            </Icon>
            <Icon>
              <FaTrello className="icon" />
              <span className="tooltip">Trello</span>
            </Icon>
            <Icon>
              <FaJira className="icon" />
              <span className="tooltip">Jira</span>
            </Icon>
          </div>
        </Card>
        <Card>
          <h1 className="text-lg font-bold mb-2">Librerie</h1>
          <div className="flex flex-wrap p-3 text-xl gap-4">
            <Icon>
              <RiTailwindCssFill className="icon" />
              <span className="tooltip">Tailwind</span>
            </Icon>
            <Icon>
              <FaBootstrap className="icon" />
              <span className="tooltip">Bootstrap</span>
            </Icon>
            <Icon>
              <SiRedux className="icon" />
              <span className="tooltip">Redux</span>
            </Icon>
            <Icon>
              <FaReact className="icon" />
              <span className="tooltip">React</span>
            </Icon>
            <Icon>
              <SiLivewire className="icon" />
              <span className="tooltip">Livewire</span>
            </Icon>

            <Icon>
              <SiReactrouter className="icon" />
              <span className="tooltip">ReactRouter</span>
            </Icon>
          </div>
        </Card>
      </div>
    </>
  );
}
