import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importe de páginas
import Home from '../Pages/Home/Home';
import Pitch from "../Pages/Pitch/Pitch";
import Instituto from "../Pages/Instituto/Instituto";
import Login from "../Pages/Login/Login";

function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Pitch/>
        },
        {
            path: '/home',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/instituto',
            element: <Instituto/>
        },
    ]);

    return <RouterProvider router={router}/>
}

export default Routes;