import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from "./Header.jsx";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import RandomApp from "./random-user/RandomApp.jsx";
import Adresse from "./adresse-api/Adresse.jsx";
import Quiz from "./quiz/Quiz.jsx";
import ErrorPage from "./error-page.jsx";
import Root from "./Root.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/address',
                element: <Adresse/>
            },
            {
                path: '/quiz',
                element: <Quiz/>
            },
            {
                path: '/random-app',
                element: <RandomApp/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
