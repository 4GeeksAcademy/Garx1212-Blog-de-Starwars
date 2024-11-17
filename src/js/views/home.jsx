import React from "react";
import Characters from "../component/Characters.jsx";
import Ships from "../component/Ships.jsx";
import Planets from "../component/Planets.jsx";
import "../../styles/index.css";

const Home = () => {
  return (
    <div className="text-center d-flex row text-light mx-5">
      <Characters />

      <Ships />

      <Planets />
    </div>
  );
};

export default Home;