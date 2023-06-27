import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
   
    <div className="hero min-h-screen banner">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
   <img className="hidden lg:block md:block ... bigX" src={require("../../images/Image-Icon/cross2.png")} alt="" />
   
    <div className="mx-5 space-y-4 ...">
      <h1 className="text-5xl font-bold font-text text-light">THE BEST FITNESS</h1>
      <h1 className="text-5xl font-bold font-text text-light">STUDIO IN TOWN </h1>
      <p className="py-6 banner-text">Looking for a gym that will take your fitness journey to the next level? Look no further than Power X gym. With our innovative programs, personalized coaching, and supportive atmosphere, you'll achieve the results you've always dreamed of. Join us today and experience the Power X difference.</p>
      <a href="/pricing" className="btn btn-accent">JOIN US</a>
    </div>
  </div>
</div>
  );
};

export default Banner;
