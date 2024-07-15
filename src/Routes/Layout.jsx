import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='font-poppins'>
            <div className='w-full md:w-[650px] bg-white min-h-screen mx-auto border border-[#ffb500]'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;


// bg-[#e2126d]