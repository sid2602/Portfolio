import React from "react";

import Navigation from "./components/navigation";
import Performance from "./layouts/Performance";
import Technologies from "./layouts/Technologies";
function App() {
  return (
    <div className="App">
      <Navigation active={false} />
      <main>
        <Performance />
        <Technologies />
      </main>
    </div>
  );
}

export default App;
