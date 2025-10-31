import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { BlogPost } from "../pages/BlogPost";
import { Feed } from "../pages/Feed";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Register } from "../pages/Register";

export const AppRouter = () => {
    return (
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
                        path="post/:slug"
                        element={
                            <ProtectedRoutes>
                                <BlogPost />
                            </ProtectedRoutes>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
