import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importe de páginas
import Home from "../Pages/Home";

function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/tela2',
            element: <></>
        }
    ]);

    return <RouterProvider router={router}/>
}

export default Routes;