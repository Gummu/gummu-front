import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./Auth";

function PrivateRoute() {
    const { currentUser } = useContext(AuthContext);
    return (!!currentUser) ? <Outlet /> : <Navigate to='/signin' replace={true}/>
};

export default PrivateRoute
