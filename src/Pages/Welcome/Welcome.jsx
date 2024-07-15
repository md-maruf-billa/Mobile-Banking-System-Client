import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen '>

            <img src="./logo.png" className='w-1/2' alt="" />

            <h1 className='text-center text-5xl'>Welcome
                <br />
                <br />
                <span className='uppercase font-bold text-[#ffb500]'>Infinity Moneys</span>
            </h1>




            <div className='space-y-4 mt-16'>
                <h3 className='text-center'>Give your identity</h3>
                <label className="input input-bordered flex items-center gap-2">

                    <input type="text" className="grow placeholder:text-center" placeholder="E-mail or phone" />
                </label>

                <label className="input input-bordered flex items-center gap-2">

                    <input type="password" className="grow placeholder:text-center" placeholder='PIN' />
                </label>
                <Link to={"/home"} className='btn w-full bg-[#ffb500]'>
                    Login
                </Link>
                <p className='text-sm'>Secure Money Transfer <Link to="/register" className='text-base underline text-[#ffb500]'>Register</Link></p>
            </div>




        </div>
    );
};

export default Welcome;