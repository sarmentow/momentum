import React, { useEffect, useState, useContext } from "react";

import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
function App() {
  return (
    <div className="grid md:grid-cols-12 min-h-screen transition duration-500 ease-in-out">
      <Navbar />
      <Timer />
    </div>
  );
}

export default App;
