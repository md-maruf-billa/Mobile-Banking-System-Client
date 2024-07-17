import React from 'react';
import { FiSettings } from 'react-icons/fi';
import user from '../../../../assets/user/profile.jpg'

const AdminNav = () => {
    return (
        <div className='bg-[#ffb500] flex justify-between items-center h-20 px-8 rounded-b-xl shadow-lg'>
            <div className='size-[50px] rounded-full'>
                <img className='w-full rounded-full' src={user} alt="" />
            </div>
            <h2 className='text-4xl text-white font-semibold'>Admin</h2>

            <FiSettings className='text-2xl text-white cursor-pointer' />
        </div>
    );
};

export default AdminNav;