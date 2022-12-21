import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';



const AdminRoute = () => {

    return (localStorage.getItem('user_role') === "1") ? <Outlet /> : <Navigate to="/login" />;

};

export default AdminRoute;