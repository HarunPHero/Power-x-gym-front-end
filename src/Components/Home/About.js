import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className="hero min-h-screen p-3 about">
        <div className="hero-content flex-col lg:flex-row">
          <img src={require("../../images/Image-Icon/wells-chan-H-vAxuWxmi8-unsplash-min.jpg")} className="object-cover w-96 shadow-2xl" />
          <div className='mx-4 space-y-2 ...' >
            <p className="text-5xl font-text text-base-200">ABOUT US</p>
            <p className="text-4xl font-text text-accent">WE ARE HERE TO DREAM!</p>
            <p className="text-4xl font-text text-dark">OUR TEAM IS HERE TO SERVE YOU</p>
           
            <p className="py-6">At Power X Gym, we're committed to helping you achieve your fitness goals. With our team of experienced trainers, state-of-the-art facilities, and evidence-based training programs, we're confident that we can help you reach your full potential. We believe in a holistic approach to fitness that incorporates proper nutrition, challenging workouts, and steady progression. Whether you're a seasoned athlete or a newcomer to fitness, we're here to support you every step of the way.</p>
            
          </div>
        </div>
      </div>
    );
};

export default About;