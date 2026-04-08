import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout.jsx'
import Apps from './Apps/Apps.jsx'
import InstallApps from './InstallApps/InstallApps';



const router = createBrowserRouter(
  [
   {
     path:'/',
    element: <RootLayout></RootLayout>,
    // Component : RootLayout,
    children: [
      {
      //  path:"/",
      index:true,
      element: <h2>Homepage</h2>,
      },
      {
       path:"/apps",
      element: <Apps/>,
      },
      {
        path:"/installApps",
        element:<InstallApps></InstallApps>
      },
    ],


     errorElement: <h2>This page is not fount</h2>,
     
   },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
