import React from "react";
import Navigation from "./components/Navigation";
import Parallax from "./components/Parallax";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ScrollButton from "./components/ScrollButton";
function App() {
  return (
    <>
      <Navigation />
      <ScrollButton />
      <Parallax />
      <Services />
      <Contact />
    </>
  );
}

export default App;
