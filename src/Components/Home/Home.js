import React from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Training from './Training';
import Why from './Why';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Training></Training>
            <Why></Why>
            
        </div>
    );
};

export default Home;