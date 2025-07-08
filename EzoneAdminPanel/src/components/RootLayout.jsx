import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const RootLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='ml-[18%]'>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout