import React, { useContext } from 'react';
import { mycontext } from '../App';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {

   const[user,setUser]=useContext(mycontext)
    return (
        <>
        {user ? <Outlet/> : <Navigate to='/login'/> }
        </>
    )
};

export default PrivateRoute;