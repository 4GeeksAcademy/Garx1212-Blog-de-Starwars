import React from "react";
import DetailsPlanet from "../component/DetailsPlanet.jsx";

const DetailsP = () => {
  return (
    <>
      <div>
        <h1 className="container d-flex justify-content-center rounded bg-black fw-bold w-25 my-3 text-light">
          {" "}
          Details{" "}
        </h1>
      </div>

      <DetailsPlanet />
    </>
  );
};

export default DetailsP;