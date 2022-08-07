import React, {useState} from "react";
import { useNavigate, useLocation} from "react-router-dom";
import {BackendAPI} from "../api/backend-api";

const backend = new BackendAPI("https://localhost:4000")

export const AuthContext = React.createContext(null);

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const authenticate = async (username, password) => {
        const token = await backend.authenticate(username, password)
        setToken(token);
        const origin = location.state?.intent?.pathname || "/";
        navigate(origin)
    }

    const signout = async () => {
        await backend.logout()
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                authenticate,
                signout,
            }}
        >
            {children}
        </AuthContext.Provider>
)
}