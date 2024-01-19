import React, { useContext } from 'react';
import CloneProvider,{cloneContext} from "./componentContext/cloneContext.jsx";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import React from 'react';
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
   
    <Layout>
      <Home/>
    </Layout>
  
  );



}
