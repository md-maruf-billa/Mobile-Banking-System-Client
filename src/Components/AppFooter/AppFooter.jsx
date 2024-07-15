import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { GoHome } from "react-icons/go";
const AppFooter = () => {
    return (
        <div className='flex justify-between items-center px-16 bg-[#e2126d] text-white py-5 rounded-t-xl'>
            <Link className='flex flex-col items-center'>
                <GoHome className='text-5xl' />
                <span className='text-sm'>Home</span>
            </Link>


            <Link className='flex flex-col items-center'>
                <MdOutlineMail className='text-5xl' />
                <span className=' text-sm'>Transactions</span>
            </Link>


            <Link className='flex flex-col items-center'>
                <RiLogoutBoxRLine className='text-5xl' />
                <span className=' text-sm'>LogOut</span>
            </Link>


        </div>
    );
};

export default AppFooter;