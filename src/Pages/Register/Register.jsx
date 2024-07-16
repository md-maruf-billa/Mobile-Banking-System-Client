import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import useAxiosLocal from './../../Utils/Hooks/AxiosLocal';

const Register = () => {
    const axiosLocal = useAxiosLocal();
    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const account_type = e.target.accountType.value;
        const password = e.target.password.value;

        const userInfo = { name, email, phone, account_type, password }

        axiosLocal.post("/create-user", userInfo)
            .then(data => {
                if (data?.data?.insertedId) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Your account are registered in our database wait for admin review",
                        icon: "success"
                    });

                    e.target.reset();
                    navigate("/")

                }
            })
    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>

            <img src="./logo.png" alt="" className='w-1/2' />


            <h2 className='text-5xl font-bold uppercase text-[#ffb500] mb-8'>Welcome</h2>
            <form onSubmit={registerUser} className='space-y-4'>
                <label className="input input-bordered flex items-center gap-2">
                    <input name='name' type="text" className="grow " placeholder="Name" />

                </label>
                <label className="input input-bordered flex items-center gap-2">

                    <input name='email' type="text" className="grow " placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">

                    <input name='phone' type="text" className="grow " placeholder="Phone" />
                </label>

                <select name='accountType' className="select select-bordered w-full max-w-xs">
                    <option disabled selected >Account Type ?</option>
                    <option>User</option>
                    <option>Agent</option>
                </select>

                <label className="input input-bordered flex items-center gap-2">

                    <input name='password' type="password" className="grow" placeholder='PIN (Min 6 Number)' />
                </label>

                <button className='btn w-full bg-[#ffb500]'>
                    Create Account
                </button>

                <p className='text-sm'>Already have account ? <Link className='text-base underline text-[#ffb500]' to="/">LogIn</Link></p>
            </form>

        </div>
    );
};

export default Register;