import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecureRoute = ({ children }) => {
    const navigate = useNavigate();
    const status = localStorage.getItem("currentStatus");

    useEffect(() => {
        if (status !== "login") {
            navigate("/");
        }
    }, [status, navigate]);

    if (status === "login") {
        return <>{children}</>;
    }

    
    return null;
};

export default SecureRoute;
