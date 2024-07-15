import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className=''>
            <div className='w-full md:w-[650px] bg-white min-h-screen mx-auto border border-[#e2126d]'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;


// bg-[#e2126d]