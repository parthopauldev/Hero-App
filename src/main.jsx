import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router/dom";
import router from './Routes/Router.jsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
       <ToastContainer position="top-right" autoClose={2000} />
  </StrictMode>,
)
