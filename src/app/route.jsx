import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../pages/mainPage.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
])
