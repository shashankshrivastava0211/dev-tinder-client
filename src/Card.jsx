import React, { useEffect } from "react";
import defaultUser from "./assets/default.jpg";

const Card = ({ data }) => {
  useEffect(() => {
    console.log("Card component mounted", data);
  }, [data]);

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img
          src={data?.photoURL || `${defaultUser}`}
          alt={data?.firstName || "Default user"}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data?.firstName} {data?.lastName}
        </h2>
        <p>{data?.about || "No description available."}</p>
        <p>{data?.age || ""}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore </button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
