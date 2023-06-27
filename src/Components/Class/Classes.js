import React, { useState } from "react";
import { useQuery } from "react-query";
import "./Classes.css";
import { Link } from "react-router-dom";

const Classes = () => {
  const [myclass, setmyClass] = useState([]);
  fetch(`http://localhost:5000/classes`)
    .then((res) => res.json())
    .then((data) => setmyClass(data));

  return (
    <div>
      <div className="classes py-32">
        <p className="text-4xl text-center font-text text-light">OUR CLASSES</p>
      </div>
      <div className="all-classes">
        <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
          {myclass?.map((mycl) => (
            <div className="col">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={mycl.img} className="card-img" alt="..." />
                <Link
                  className="btn btn-accent mt-[-20px] text-center"
                  to={mycl._id}
                >
                  {mycl.name}→
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
