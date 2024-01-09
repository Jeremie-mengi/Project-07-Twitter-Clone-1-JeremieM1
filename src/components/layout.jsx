import React from 'react';
import Home from '../pages/home';
import { Outlet } from 'react-router-dom';
import SideBraleft from './SideBraleft';
import SidebarRigth from './SidebarRigth';
import ProfilUser from './ProfilUser';

function Layout({children}) {
    return (
        <>
        <SideBraleft/>
        <Outlet/>
        <SidebarRigth/>
    </>
    );
}

export default Layout;