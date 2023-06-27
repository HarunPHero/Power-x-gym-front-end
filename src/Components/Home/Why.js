import React from 'react';
import './Why.css'

const Why = () => {
    return (
        <div className='why my-5'>
            <p className="text-accent font-text text-3xl text-center">
        WHY <span className="text-dark">CHOOSE US</span>
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
      <div className="col">
        <div className="why-card-1 h-100 py-5 shadow-2xl">
          <img src={require("../../images/Image-Icon/Group 87-min.png")} className="card-img-top w-16 mx-auto d-block pt-2" alt="..." />
          <div className="card-body">
            <h5 className="text-center text-3xl font-text">FREE FITNESS TRAINNING</h5>
            <p className="text-center">
            Whether you're new to exercise or a seasoned gym-goer, our free fitness training program can help you reach your full potential and achieve the results you're looking for.
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="why-card-2 h-100 py-4 shadow-2xl">
          <img src={require("../../images/Image-Icon/Group 88-min.png")} className="card-img-top w-20 mx-auto d-block pt-2" alt="..." />
          <div className="card-body">
            <h5 className="text-center text-3xl font-text">TONS OF CARDIO & STRENGTH</h5>
            <p className="text-center">
            While cardio is important for improving cardiovascular health and burning calories, strength training is essential for building muscle and boosting metabolism.
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="why-card-3 py-5 h-100 shadow-2xl">
          <img src={require("../../images/Image-Icon/gift-2-min.png")} className="card-img-top w-16 mx-auto d-block pt-2" alt="..." />
          <div className="card-body">
            <h5 className="text-center text-3xl font-text">NO COMMITMENT MEMBERSHIPS</h5>
            <p className="text-center">
            With no commitment memberships, you can avoid any penalties for cancelling or pausing your membership, which can be a great option for those who may need to take time off for travel, injury, or other reasons.
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Why;