import React from 'react';
import { SlPresent } from "react-icons/sl";
import { MdOutlineSendToMobile } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { Link } from 'react-router-dom';

const OurServices = () => {
    return (
        <div className='mt-8 px-4 md:px-16'>
            <h2 className='text-3xl font-semibold text-center'>Our Services</h2>

            <div className='flex justify-between items-center  mt-16'>


                <Link className='flex flex-col justify-center items-center gap-2 border rounded-full size-28'>
                    <SlPresent className='text-3xl md:text-5xl' />
                    <span className='text-sm text-gray-600'>Send Mony</span>
                </Link>


                <Link className='flex flex-col justify-center items-center gap-2 border rounded-full size-28'>
                    <MdOutlineSendToMobile className='text-3xl md:text-5xl' />
                    <span className='text-sm text-gray-600'>Cash Out</span>
                </Link>


                <Link className='flex flex-col justify-center items-center gap-2 border rounded-full size-28'>
                    <MdAddCard className='text-3xl md:text-5xl' />
                    <span className='text-sm text-gray-600'>Cash In</span>
                </Link>


                
            </div>

        </div>
    );
};

export default OurServices;