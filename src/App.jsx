import React from "react";
import Overwiev from "./Pages/Overwiev";
import { Routes, Route } from "react-router-dom";
import Repositoriyes from "./Pages/Repositoriyes";
import Projects from "./Pages/Projects";
import Packages from "./Pages/Packages";
import Stars from "./Pages/Stars";
import Navbar from "./Components/Navbar";
import Error from "./Pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Overwiev />} />
      <Route path="/repositories" element={<Repositoriyes />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/stars" element={<Stars />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
