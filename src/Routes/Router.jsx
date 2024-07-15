import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../Pages/Home/Home';
import Welcome from '../Pages/Welcome/Welcome';
import Register from '../Pages/Register/Register';



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Welcome />
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/register",
                element:<Register/>
            }
        ]
    }

])

export default Router;