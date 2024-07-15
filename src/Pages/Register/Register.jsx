import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>

            <img src="./logo.png" alt="" className='w-1/2' />


            <h2 className='text-5xl font-bold uppercase text-[#ffb500] mb-8'>Welcome</h2>
            <div className='space-y-4'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow " placeholder="Name" />

                </label>
                <label className="input input-bordered flex items-center gap-2">

                    <input type="text" className="grow " placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">

                    <input type="text" className="grow " placeholder="Phone" />
                </label>

                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected >Account Type ?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>

                <label className="input input-bordered flex items-center gap-2">
                    
                    <input type="password" className="grow" placeholder='PIN (Min 6 Number)'  />
                </label>

                <Link to="/home" className='btn w-full bg-[#ffb500]'>
                    Create Account
                </Link>

                <p className='text-sm'>Already have account ? <Link className='text-base underline text-[#ffb500]' to="/">LogIn</Link></p>
            </div>

        </div>
    );
};

export default Register;