import React from 'react';
import TopBanner from '../../Components/TopBanner/TopBanner';
import AppFooter from '../../Components/AppFooter/AppFooter';

const SendMoney = () => {
    return (
        <div className=''>
            <TopBanner />


            {/* send money content */}

            <div className='flex flex-col items-center gap-8 justify-center mt-16'>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">To</span>
                    </div>
                    <input type="text" placeholder="Email or Phone" className="input input-bordered w-full max-w-xs" />

                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Amounts</span>
                    </div>
                    <input type="text" placeholder="Min 50 Tka" className="input input-bordered w-full max-w-xs" />

                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Note</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24 w-[320px]" placeholder="Write any note for transaction reference."></textarea>

                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">PIN</span>
                    </div>
                    <input type="text" placeholder="PIN must be 6 number" className="input input-bordered w-full max-w-xs" />

                </label>

                <button className='btn bg-[#ffb500] max-w-xs w-full'>
                    Sent Now
                </button>
            </div>



            <div className='fixed   bottom-0'>
                <AppFooter />
            </div>

        </div>
    );
};

export default SendMoney;