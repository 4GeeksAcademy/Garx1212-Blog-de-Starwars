import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DetailsPlanet = () => {
  const { store, actions } = useContext(Context);
  const [currentPlanet, setCurrentPlanet] = useState();
  const { useId } = useParams();

  useEffect(() => {
    const planet = actions.detailsPlanet(useId);
    setCurrentPlanet(planet);
  }, [store.infoPlanets, useId]);
  return (
    <>
      {currentPlanet && (
        <div className="card planets-card mx-auto bg-black rounded text-light">
          <div>
            <div className="d-flex justify-content-center">
              <h3 className="my-4">{currentPlanet.result.properties.name}</h3>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${currentPlanet.result.uid}.jpg`}
                className="detailsP-image rounded mx-3"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className="mx-3">
              <p className="fw-bold">Diameter:</p>
              <p>{currentPlanet.result.properties.diameter}</p>
            </div>
            <div className="mx-3">
              <p className="fw-bold">Climate:</p>
              <p>{currentPlanet.result.properties.climate}</p>
            </div>
            <div className="mx-3">
              <p className="fw-bold">Surface Water:</p>
              <p className="mx-3">
                {currentPlanet.result.properties.surface_water}
              </p>
            </div>
            <div className="mx-3">
              <p className="fw-bold">Terrain:</p>
              <p>{currentPlanet.result.properties.terrain}</p>
            </div>
            <div className="mx-3">
              <p className="fw-bold">Gravity:</p>
              <p>{currentPlanet.result.properties.gravity}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPlanet;
