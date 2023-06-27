import React, { useEffect, useState } from "react";
import './Pricing.css'

const Pricing = () => {
  
  const [pricings, setPricings] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/pricings`)
    .then(res=>res.json())
    .then(data => setPricings(data))
  },[])
  return (
    <div>
      <div className="payment-banner py-32">
        <p className="text-4xl text-center font-text text-light">PRICING PLANS</p>
      </div>
      <div className="pricings m-5">
      <p className="text-accent font-text text-3xl text-center ">
            CHOOSE THE OFFER <span className="text-dark">THAT SUITS YOU</span>
          </p>
          <p className="text-base-400 text-center">Get fit and feel great with our affordable gym pricing options starting at just a low monthly fee!</p>
          <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
      {/* <div className="col">
        <div className="service-card-1 h-100">
         
          <div className="card-body space-y-5 ...">
            <h5 className="text-center font-text text-light">BILLED MONTHLY</h5>
            <h5 className="text-center text-3xl font-text text-light">ADVANCE PLAN</h5>
            <h5 className="text-center text-5xl font-text text-accent">$140</h5>
            <h5 className="text-center text-light">MOBILE OPTIMISED</h5>
            <h5 className="text-center text-light">BEST HOSTING</h5>
            <h5 className="text-center text-light">FREE CUSTOM</h5>
            <h5 className="text-center text-light">OUTSTANDING</h5>
            <h5 className="text-center text-light">HAPPY CUSTOMERS</h5>
            <button className="btn btn-accent">PURCHASE</button>
           
          </div>
        </div>
      </div>

      <div className="col">
        <div className="service-card-2 h-100">
        <div className="card-body space-y-5 ...">
            <h5 className="text-center font-text text-light">BILLED MONTHLY</h5>
            <h5 className="text-center text-3xl font-text text-light">BASIC PLAN</h5>
            <h5 className="text-center text-5xl font-text text-accent">$120</h5>
            <h5 className="text-center text-light">MOBILE OPTIMISED</h5>
            <h5 className="text-center text-light">BEST HOSTING</h5>
            <h5 className="text-center text-light">FREE CUSTOM</h5>
            <h5 className="text-center text-light">OUTSTANDING</h5>
            <h5 className="text-center text-light">HAPPY CUSTOMERS</h5>
            <button className="btn btn-accent">PURCHASE</button>
           
          </div>
        </div>
      </div>

      <div className="col">
        <div className="service-card-3 h-100">
        <div className="card-body space-y-5 ...">
            <h5 className="text-center font-text text-light">BILLED MONTHLY</h5>
            <h5 className="text-center text-3xl font-text text-light">BEGINNERS</h5>
            <h5 className="text-center text-5xl font-text text-accent">$90</h5>
            <h5 className="text-center text-light">MOBILE OPTIMISED</h5>
            <h5 className="text-center text-light">BEST HOSTING</h5>
            <h5 className="text-center text-light">FREE CUSTOM</h5>
            <h5 className="text-center text-light">OUTSTANDING</h5>
            <h5 className="text-center text-light">HAPPY CUSTOMERS</h5>
            <button className="btn btn-accent">PURCHASE</button>
           
          </div>
        </div>
      </div> */}
      {
        pricings?.map(pricing=> <>
        <div className="col">
        <div style={{
          backgroundImage:`url(${pricing?.backgroundImg})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
        }} className=" h-100">
         
          <div className="card-body space-y-5 ...">
            <h5 className="text-center font-text text-light">BILLED MONTHLY</h5>
            <h5 className="text-center text-3xl font-text text-light">{pricing?.name}</h5>
            <h5 className="text-center text-5xl font-text text-accent">${pricing?.price}</h5>
            {/* <h5 className="text-center text-light">MOBILE OPTIMISED</h5>
            <h5 className="text-center text-light">BEST HOSTING</h5>
            <h5 className="text-center text-light">FREE CUSTOM</h5>
            <h5 className="text-center text-light">OUTSTANDING</h5>
            <h5 className="text-center text-light">HAPPY CUSTOMERS</h5> */}
            {Object.entries(pricing?.resources).map(([resource, available]) => (
              
            <h5 className="text-center text-light" key={resource}>
              {available ==="yes" ? (
                <>
                 <span>&#10004;</span> {resource} 
                </>
              ) : (
                <>
                 ✖ {resource}
                </>
              )}
            </h5>
          ))}
            <button className="btn btn-accent">PURCHASE</button>
           
          </div>
        </div>
      </div>
        </>)
      }

    </div>
      </div>
    </div>
  );
};

export default Pricing;
