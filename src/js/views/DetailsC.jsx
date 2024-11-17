import React from "react";
import DetailsCharacter from "../component/DetailsCharacter.jsx";

const DetailsC = () => {
  return (
    <>
      <div>
        <h1 className="container d-flex justify-content-center rounded bg-black fw-bold w-25 my-3 text-light">
          {" "}
          Details{" "}
        </h1>
      </div>

      <DetailsCharacter />
    </>
  );
};

export default DetailsC;