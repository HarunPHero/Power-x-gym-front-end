import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ClassPage.css";

const ClassPage = () => {
  const navigate = useNavigate();
  const [classdetail, setClassDetail] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    fetch(`http://localhost:5000/classes/${id}`)
      .then((res) => res.json())
      .then((data) => setClassDetail(data));
  }, []);
  const handleJoinUs = () => {
    navigate("/pricing"); // Use navigate instead of history.push
  };

  return (
    <div>
      <div className="class-detail py-32">
        <p className="text-4xl text-center font-text text-light">
          {classdetail?.name}
        </p>
      </div>
      <div className="all-classes m-4">
        <div className="left-side space-y-6 ...">
          <img className="class-img" src={classdetail?.img} alt="classimage" />
          <p className="detail-text text-base-300 text-justify lg:w-[460px]">
            {classdetail?.description}
          </p>

          {classdetail?.points?.map((point, index) => (
            <p key={index} className="d-flex font-bold">
              <img
                className="mr-2"
                src={require("../../images/Image-Icon/checkmark-square-2-min.png")}
                alt="right"
              />
              {point}
            </p>
          ))}
        </div>

        <div className="right-side align-items-center lg:m-3">
          <p className="text-accent font-text text-3xl ">
            CLASS <span className="text-dark">SCHEDULE</span>
          </p>
          <div class="row row-cols-1 row-cols-md-2 g-4 my-3">
            {classdetail?.schedule?.map((s) => (
              <>
                <div class="col">
                  <div>
                    <div className="shadow-xl p-8">
                      <h5 className="font-text text-2xl">{s?.day}</h5>
                      <p className="text-accent ">{s?.times.join(" - ")}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div class="col">
            <div>
              <button
                onClick={handleJoinUs}
                name={classdetail?.name}
                className="w-full btn btn-accent"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;
