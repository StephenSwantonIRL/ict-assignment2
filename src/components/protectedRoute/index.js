import React, { useState, useContext } from "react";
import {AuthContext} from "../../contexts/authContext";
import { useLocation, Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {

    const { user } = useContext(AuthContext);
    const token = user.token
    const {location} = useLocation();

    if (!token) {
        return <Navigate to={"/login"}
                         replace
                         state={{ intent: location}} />
    }
    return children;
}

export default ProtectedRoute