import React from 'react';
import Home from '../pages/home';
import { Outlet } from 'react-router-dom';
import SideBraleft from './SideBraleft';
import TrendsComponent from './TrendsComponent';

function Layout({children}) {
    return (
        <>
        <SideBraleft/>
        <Outlet/>
        <TrendsComponent/>
        
    </>
    );
}

export default Layout;