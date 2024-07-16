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
            },
            {
                path:"/send-money",
                element:<SendMoney/>
            },
            {
                path:"/cash-out",
                element:<CashOut/>
            },
            {
                path:"/cash-in",
                element:<CashIn/>
            },
            {
                path:"/transaction",
                element:<Trans/>
            }
        ]
    }

])

export default Router;