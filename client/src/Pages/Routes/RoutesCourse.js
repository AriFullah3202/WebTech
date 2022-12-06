import React from 'react'
import SideBar from '../Shared/SideBar';
import { Outlet } from 'react-router';

const RoutesCourse = () => {
    return (
        <div className = "grid grid-cols-12 gap-4">
            <div className = "col-span-2">
                <SideBar></SideBar>

            </div>
            <div className = "col-span-10">
                <Outlet></Outlet>

            </div>
        </div>
    )
}

export default RoutesCourse
