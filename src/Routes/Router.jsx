import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../Pages/Home/Home';
import Welcome from '../Pages/Welcome/Welcome';
import Register from '../Pages/Register/Register';
import SendMoney from '../Pages/SendMoney/SendMoney';
import CashOut from '../Pages/CashOut/CashOut';
import CashIn from '../Pages/CashIn/CashIn';
import Trans from '../Pages/Trans/Trans';
import SecureRoute from '../Utils/Secure/SecureRoute';
import AdminHome from '../Pages/Admin/AdminHome/AdminHome';



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
                path: "/home",
                element: <SecureRoute><Home /></SecureRoute>
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/send-money",
                element: <SecureRoute> <SendMoney /></SecureRoute>
            },
            {
                path: "/cash-out",
                element: <SecureRoute><CashOut /></SecureRoute>
            },
            {
                path: "/cash-in",
                element: <SecureRoute><CashIn /></SecureRoute>
            },
            {
                path: "/transaction",
                element: <SecureRoute><Trans /></SecureRoute>
            },
            {
                path:"/admin-home",
                element:<AdminHome/>
            }
        ]
    }

])

export default Router;