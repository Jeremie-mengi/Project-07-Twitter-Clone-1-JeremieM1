import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ProfilUser from './components/ProfilUser'
import Follow from './components/Follow'

const router = createBrowserRouter(
  [{
    path:"/",
    element:<App/>
    },

  {
  path:"/Follow",
  element:<Follow/>
  },
  // {
  //   path:"/Lodge",
  //   element:<Lodge/>
  //   }
  //   ,
  // {
  //   path:"/Our",
  //   element:<Our/>
  //   }
  //   ,
  // {
  //   path:"/TheSumm",
  //   element:<TheSumm/>
  //   }
  //   ,
  //   {
  //     path:"/How",
  //     element:<How/>
  //     }
  //     ,
  //     {
  //       path:"/Contact",
  //       element: <Contact/>
  //       }
  ]
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);
