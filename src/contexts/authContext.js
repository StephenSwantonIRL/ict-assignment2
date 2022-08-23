import React, {useState} from "react";
import { useNavigate, useLocation} from "react-router-dom";
import {BackendAPI} from "../api/backend-api";

const backend = new BackendAPI("https://movie-app-backend.glitch.me")

export const AuthContext = React.createContext(null);

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    function storeUser(user){
        setUser(user);
        console.log("User updated to " + user.firstName)
    }

    function getUser(){
        console.log(user)
        return user;
    }

    async function checkToken(token){
     return await backend.checkToken(token);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                storeUser,
                getUser,
                checkToken,
            }}
        >
            {children}
        </AuthContext.Provider>
)
}

export default AuthContextProvider;