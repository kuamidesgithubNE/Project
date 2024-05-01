import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/home";
import Projects from "./pages/projects/projects";
import Profile from "./pages/profile/profile";
import AddProject from "./pages/addproject/addproject";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="addproject" element={<AddProject />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
