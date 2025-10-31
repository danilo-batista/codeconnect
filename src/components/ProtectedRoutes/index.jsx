import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "../Spinner";

export const ProtectedRoutes = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate("/auth/login");
        }
    }, [isLoading, isAuthenticated, navigate]);

    if (isLoading) {
        return <Spinner />;
    }

    if (!isAuthenticated) {
        return null;
    }
    return children;
};
