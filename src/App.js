import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SectionTec from "./components/SectionTec";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Botton from "./components/UI/Botton";
import ScrollToAnchor from "./components/ScrollToAnchor";
import ProvaCarosello from "./components/ProvaCarosello";

function App() {
  return (
    <div className="App">
      <ScrollToAnchor></ScrollToAnchor>
      <Navbar />
      <Intro />
      <Header></Header>
      <ProvaCarosello />
      <SectionTec />
      <Footer />
      <Routes></Routes>
    </div>
  );
}

export default App;
