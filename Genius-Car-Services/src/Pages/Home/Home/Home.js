import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import './Home.css';
import Banner from '../Banner/Banner';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
    return (
        <>
            {/* this empty <></> is called fregment */}
            <PageTitle title={'Home'}></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;