import React from "react";
import "./Services.css"

const Services = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
      <div className="col">
        <div className="service-card-1 h-100">
          <img src={require("../../images/Image-Icon/Group 80-min.png")} className="card-img-top w-10 mx-auto d-block pt-2" alt="..." />
          <div className="card-body">
            <h5 className="text-center text-3xl font-text text-light">PROGRESSION</h5>
            <p className="text-center text-light">
            Experience Steady Progression and Challenging Workouts with Our Customized Programs.
            Maximize Your Growth Potential with Our Measurable and Periodized Training Approach
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="service-card-2 h-100">
          <img src={require("../../images/Image-Icon/Group 81-min.png")} className="card-img-top w-20 mx-auto d-block pt-2" alt="..." />
          <div className="card-body">
            <h5 className="text-center text-3xl font-text text-accent pt-4">WORKOUT</h5>
            <p className="text-center text-light">
            Our team of experienced trainers will help you get the most out of every workout, with customized programs that emphasize proper form, technique, and progression.
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="service-card-3 h-100">
          <img src={require("../../images/Image-Icon/Group 82-min.png")} className="card-img-top w-10 mx-auto d-block pt-2" alt="..." />
          <div className="card-body">
            <h5 className="text-center text-3xl font-text text-light">NUTRITION</h5>
            <p className="text-center text-light">
            At Power X Gym, we believe that proper nutrition is key to achieving optimal fitness results, and offer evidence-based nutrition guidance to support your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
