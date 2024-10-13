import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../dataContext/DataContext';
function Route(props) {
    const { user } = useContext(DataContext)
    return user ? <Outlet /> : <Navigate to={"/login"} />
}

export default Route;