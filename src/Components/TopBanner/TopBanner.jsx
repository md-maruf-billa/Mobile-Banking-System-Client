import React from 'react';
import { FiSettings } from "react-icons/fi";
import user from '../../assets/user/profile.jpg';
import { TbCoinTakaFilled } from "react-icons/tb";

const TopBanner = () => {
    return (


        <div className='flex justify-between items-center h-24 bg-[#ffb500] rounded-b-2xl shadow-xl px-8'>
            {/* User Info */}
            <div>
                <div className='size-[50px] rounded-full'>
                    <img className='w-full rounded-full' src={user} alt="" />
                </div>
            </div>


            {/* view Balance   */}
            <div >
                <p className='flex items-center gap-3 bg-white px-8 py-2 text-[#ffb500] text-xl rounded-full'>
                    <TbCoinTakaFilled  className='text-2xl'/> 0.00
                </p>
            </div>


            {/* setting */}
            <div>
                <FiSettings className='text-2xl text-white cursor-pointer' />
            </div>
        </div>


    );
};

export default TopBanner;