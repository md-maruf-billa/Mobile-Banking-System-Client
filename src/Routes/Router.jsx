import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../Pages/Home/Home';



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path:"/",
                element:<Home/>
            }
        ]
    }

])

export default Router;