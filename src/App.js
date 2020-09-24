import React from "react";

import Navigation from "./components/navigation";
import Performance from "./layouts/Performance";
function App() {
  return (
    <div className="App">
      <Navigation active={false} />
      <main>
        <Performance />
      </main>
    </div>
  );
}

export default App;
