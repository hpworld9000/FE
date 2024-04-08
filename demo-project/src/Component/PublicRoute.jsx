import { Navigate, Outlet } from 'react-router-dom';

import React from 'react'

function PublicRoute() {
    const auth = localStorage.getItem("user");

    return auth ? <Navigate to={"/"} /> : <Outlet />;
}

export default PublicRoute