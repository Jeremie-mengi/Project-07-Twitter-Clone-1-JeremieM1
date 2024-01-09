import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout';
import Home from './pages/home';
import ProfilUser from './components/ProfilUser';



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:"/Profile",
          element: <ProfilUser/>, 
        },
        // {
        //   path:"/explore",
        //   element:< />
        // },
        // {
        //   path:"/notification",
        //   element:< />
        // },
        // {
        //   path:"/message",
        //   element:< />
        // },
        // {
        //   path:"/bookmark",
        //   element:</>
        // },
        // {
        //   path:"/liste",
        //   element:</>
        // },
        // {
        //   path:"/more",
        //   element:</>
        // },
  
    ],
       
    },
  ]);  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);
