import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';



const TechRoute = () => {

    return (localStorage.getItem('user_role') === "1" || localStorage.getItem('user_role') === "4" ) ? <Outlet /> : <Navigate to="/login" />;

};

export default TechRoute;