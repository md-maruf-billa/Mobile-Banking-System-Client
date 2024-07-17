import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosLocal from '../../Utils/Hooks/AxiosLocal';
import Swal from 'sweetalert2';

const Welcome = () => {
    const navigate = useNavigate();
    const axiosLocal = useAxiosLocal();
    const [errorMessage, setErrorMessage] = useState();


    const login = (e) => {
        e.preventDefault();

        const accountNumber = e.target.accountNumber.value;
        const password = e.target.password.value;
        const userInfo = { accountNumber, password }

        axiosLocal.post("/login", userInfo)
            .then(data => {
                console.log()
                if (data.data.message) {
                    setErrorMessage(data.data.message)
                }
                else {
                    localStorage.setItem("currentStatus", "login")
                    setErrorMessage("");
                    Swal.fire({
                        title: "Successfully",
                        text: "You are successfully logedIn",
                        icon: "success"
                    });
                    if (data.data.accountType == "User") {

                        navigate("/home")
                    }
                    else if(data.data.accountType == "Agent"){

                    }
                    else if(data.data.accountType == "Admin"){
                        navigate("/admin-home")
                    }
                }
            })

    }
    return (
        <div className='flex flex-col justify-center items-center min-h-screen '>

            <img src="./logo.png" className='w-1/2' alt="" />

            <h1 className='text-center text-5xl'>Welcome
                <br />
                <br />
                <span className='uppercase font-bold text-[#ffb500]'>Infinity Moneys</span>
            </h1>




            <form onSubmit={login} className='space-y-4 mt-16'>
                <h3 className='text-center'>Give your identity</h3>
                <label className="input input-bordered flex items-center gap-2">

                    <input name='accountNumber' type="text" className="grow placeholder:text-center" placeholder="E-mail or phone" />
                </label>

                <label className="input input-bordered flex items-center gap-2">

                    <input name='password' type="password" className="grow placeholder:text-center" placeholder='PIN' />
                </label>
                <button className='btn w-full bg-[#ffb500]'>
                    Login
                </button>
                <p className='text-sm'>Secure Money Transfer <Link to="/register" className='text-base underline text-[#ffb500]'>Register</Link></p>
                <p className='text-center text-red-600 text-xs'>{errorMessage}</p>
            </form>




        </div>
    );
};

export default Welcome;