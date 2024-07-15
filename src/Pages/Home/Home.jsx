import React from 'react';
import TopBanner from '../../Components/TopBanner/TopBanner';
import OurServices from '../../Components/OurServices/OurServices';
import OfferSlide from '../../Components/OfferSlide/OfferSlide';
import AppFooter from '../../Components/AppFooter/AppFooter';

const Home = () => {
    return (
        <div className='relative min-h-screen'>
            <TopBanner />
            <OurServices />


            {/* Slide for advertisement */}
            <div className='px-4 mt-16'>
                <OfferSlide />
            </div>




            <div className='fixed w-full bottom-0'>
                <AppFooter />
            </div>
        </div>
    );
};

export default Home;