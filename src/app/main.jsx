import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import '../common/styles/index.css'
import { router } from './route.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
