import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';



const EmployeRoute = () => {

    return (localStorage.getItem('user_role') === "1" || localStorage.getItem('user_role') === "2" ) ? <Outlet /> : <Navigate to="/login" />;

};

export default EmployeRoute;