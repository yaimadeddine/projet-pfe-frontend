import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';



const AgentRoute = () => {

    return (localStorage.getItem('user_role') === "1" || localStorage.getItem('user_role') === "3" ) ? <Outlet /> : <Navigate to="/login" />;

};

export default AgentRoute;