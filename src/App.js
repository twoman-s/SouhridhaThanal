import React from "react";
import Navigation from "./components/Navigation";

import Parallax from "./components/Parallax";
import Contact from "./components/Contact";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Navigation />
      <Parallax />

      <Services />
      <Contact />
    </>
  );
}

export default App;
