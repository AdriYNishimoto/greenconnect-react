import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importe de páginas
import Home from '../Pages/Home/Home';
import Pitch from "../Pages/Pitch/Pitch";

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
    ]);

    return <RouterProvider router={router}/>
}

export default Routes;