import React from "react";

import Navigation from "./components/navigation";
import Performance from "./layouts/Performance";
import Technologies from "./layouts/Technologies";
import Projects from "./layouts/Projects";

function App() {
  return (
    <div className="App">
      <Navigation active={false} />
      <main>
        <Performance />
        <Technologies />
        <Projects />
      </main>
    </div>
  );
}

export default App;
