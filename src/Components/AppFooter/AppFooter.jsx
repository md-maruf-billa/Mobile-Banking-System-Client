import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { GoHome } from "react-icons/go";
import Swal from 'sweetalert2';
const AppFooter = () => {
    const navigate = useNavigate();

    const logOut = () => {
        Swal.fire({
            title: "Successfully",
            text: "Log Out successful",
            icon: "success"
        });
        localStorage.removeItem("currentStatus");
        navigate("/")
    }

    return (
        <div className='flex justify-between items-center px-16 bg-[#ffb500] shadow-lg text-white py-5 rounded-t-xl w-[650px]'>
            <Link to="/home" className='flex flex-col items-center'>
                <GoHome className='text-5xl' />
                <span className='text-sm'>Home</span>
            </Link>


            <Link to="/transaction" className='flex flex-col items-center'>
                <MdOutlineMail className='text-5xl' />
                <span className=' text-sm'>Transactions</span>
            </Link>


            <button onClick={logOut} className='flex flex-col items-center'>
                <RiLogoutBoxRLine className='text-5xl' />
                <span className=' text-sm'>LogOut</span>
            </button>


        </div>
    );
};

export default AppFooter;