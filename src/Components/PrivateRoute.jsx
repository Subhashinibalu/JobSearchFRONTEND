import React, { useContext } from 'react';
import { mycontext } from '../App';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
//user deteails 
   const[user,setUser]=useContext(mycontext)
    return (
        <>
        {/* if user exist then the private route works or else will be navigated to login page */}
        {user ? <Outlet/> : <Navigate to='/login'/> }
        </>
    )
};

export default PrivateRoute;