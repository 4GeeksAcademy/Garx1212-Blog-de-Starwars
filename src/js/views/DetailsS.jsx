import React from "react";
import DetailsShip from "../component/DetailsShip.jsx";

const DetailsS = () => {
  return (
    <>
      <div>
        <h1 className="container d-flex justify-content-center rounded bg-black fw-bold w-25 my-3 text-light">
          {" "}
          Details{" "}
        </h1>
      </div>

      <DetailsShip />
    </>
  );
};

export default DetailsS;