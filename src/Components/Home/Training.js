import React from "react";
import "./Training.css";

const Training = () => {
  return (
    <div className="training mt-5">
      <p className="text-dark font-text text-3xl text-center">
        TRAINING <span className="text-accent">PROGRAMMS</span>
      </p>
      {/* <div className="hero min-h-screen p-3 training">
        <div className="hero-content flex-col lg:flex-row">
          <img src={require("../../images/Image-Icon/bruce-mars-gJtDg6WfMlQ-unsplash-min.png")} className="w-2/4 shadow-2xl" />
          <div>
          <img src={require("../../images/Image-Icon/arthur-edelman-qfjuh4OLdxw-unsplash-min.jpg")} className="2-2/4 shadow-2xl" />
          </div>
        </div>
      </div> */}
      <div className="row row-cols-1 row-cols-md-2 g-4 mx-5 my-2">
        <div className="col">
          <div className="training-card-2">
            <button className="btn btn-accent font-text my-24">
              YOGA TRAINNING SESSION
            </button>
          </div>
        </div>
        <div className="col">
          <div className="training-card-1">
            <button className="btn btn-accent font-text my-24">
              CARDIO TRAINNING SESSION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
