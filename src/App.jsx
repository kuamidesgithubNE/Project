import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/home";
import Projects from "./pages/projects/projects";
import NavBar from "./components/navbar";
import Profile from "./pages/profile/profile";
import AddProject from "./pages/addproject/addproject";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="home" index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="addproject" element={<AddProject />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
