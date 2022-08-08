import React, {useState} from "react";
import { useNavigate, useLocation} from "react-router-dom";

export const AuthContext = React.createContext(null);

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    function storeUser(user){
        setUser(user);
        console.log("User updated to " + user.firstName)
    }

    function getUser(){
        console.log(user)
        return user;
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                storeUser,
                getUser,
            }}
        >
            {children}
        </AuthContext.Provider>
)
}

export default AuthContextProvider;