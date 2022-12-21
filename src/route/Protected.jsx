import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';



// const useAuth = () => {

//     const loggedIn = false;
//     if (localStorage.getItem('token')) {
//         const loggedIn = true;
//     } 
    
//     const user = {loggedIn}

//     return user && user.loggedIn;
// };


const Protected = () => {

    // const isAuth = useAuth();

    const isAuth = localStorage.getItem('token');

    return isAuth ? <Outlet /> : <Navigate to="/login" />;

};

export default Protected;