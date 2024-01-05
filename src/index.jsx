import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfilUser from './components/ProfilUser'
import App from './App';
import Layout from './components/layout';
import Home from './pages/home';


const router = createBrowserRouter(
  [{
    path: "/",
    element: <Layout/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/profil",
        element: <ProfilUser />
      },
      // {
      //   path:"/explore",
      //   element:<ProfilUser />
      // },
      // {
      //   path:"/notification",
      //   element:<ProfilUser />
      // },
      // {
      //   path:"/message",
      //   element:<ProfilUser />
      // },
      // {
      //   path:"/bookmark",
      //   element:<ProfilUser />
      // },
      // {
      //   path:"/liste",
      //   element:<ProfilUser />
      // },
      // {
      //   path:"/more",
      //   element:<ProfilUser />
      // }

  ],
     
  }]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);
