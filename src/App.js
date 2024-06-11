import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SectionTec from "./components/SectionTec";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import ScrollToAnchor from "./components/ScrollToAnchor";
import Carosello from "./components/Carosello";

function App() {
  return (
    <div className="App">
      <ScrollToAnchor />
      <Navbar />
      <Intro />
      <Header />
      <Carosello />
      <SectionTec />
      <Footer />
    </div>
  );
}

export default App;
