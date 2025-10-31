import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedRoutes } from "./components/ProtectedRoutes/index.jsx";
import { BlogPost } from "./pages/BlogPost/index.jsx";
import { Feed } from "./pages/Feed/index.jsx";
import { Login } from "./pages/Login/index.jsx";
import { Logout } from "./pages/Logout/index.jsx";
import { Register } from "./pages/Register/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/">
          <Route
            path=""
            element={
              <ProtectedRoutes>
                <Feed />
              </ProtectedRoutes>
            }
          />
          <Route
            path="post"
            element={
              <ProtectedRoutes>
                <BlogPost />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
