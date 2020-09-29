import React from "react";

import Navigation from "./components/navigation";
import Performance from "./layouts/Performance";
import Technologies from "./layouts/Technologies";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Performance />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
