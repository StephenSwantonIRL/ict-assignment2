import React, { useState, useContext } from "react";
import {AuthContext} from "../../contexts/authContext";
import { useLocation } from "react-router-dom"

const ProtectedRoute = ({children}) => {

    const { token } = useContext(AuthContext);
    const {location} = useLocation();

    if (!token) {
        return <Navigate to={"/login"}
                         replace
                         state={{ intent: location}} />
    }
    return children;
}

export default ProtectedRoute