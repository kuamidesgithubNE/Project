import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/home";
import Projects from "./pages/projects/projects";
import Profile from "./pages/profile/profile";
import Modal from "./pages/addproject/modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="modal" element={<Modal />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
