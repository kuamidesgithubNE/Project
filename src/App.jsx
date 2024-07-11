import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./pages/Authentication/authContext";
import PrivateRoute from "./pages/Authentication/ProvideRoutes";
import "./App.css";
import Home from "./pages/homepage/home";
import Projects from "./pages/projects/projects";
import Profile from "./pages/profile/profile";
import Modal from "./pages/addproject/modal";
import Login from "./pages/Authentication/login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="projects"
            element={
              <PrivateRoute>
                <Projects />
              </PrivateRoute>
            }
          />
          <Route
            path="modal"
            element={
              <PrivateRoute>
                <Modal />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
