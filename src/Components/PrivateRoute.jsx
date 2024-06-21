import React, { useContext } from 'react';
import { mycontext } from '../App';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const [token,setToken]=useContext(mycontext)
    return (
        <>
        {token ? <Outlet/> : <Navigate to='/login'/> }
        </>
    )
};

export default PrivateRoute;