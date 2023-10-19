import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importe de páginas
import Home from '../Pages/Home/Home';
import Pitch from "../Pages/Pitch/Pitch";
import Instituto from "../Pages/Instituto/Instituto";
import Login from "../Pages/Login/Login";
import Games from "../Pages/Games/Games";
import Conteudo from "../Pages/Conteudo/Conteudo";
import Profile from "../Pages/Profile/Profile";

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
        {
            path: '/games',
            element: <Games/>
        },
        {
            path: '/conteudo',
            element: <Conteudo/>
        },
        {
            path: '/perfil',
            element: <Profile/>
        }
    ]);

    return <RouterProvider router={router}/>
}

export default Routes;