import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DetailsShip = () => {
  const { store, actions } = useContext(Context);
  const [currentShip, setCurrentShip] = useState();
  const { useId } = useParams();

  useEffect(() => {
    const ship = actions.detailsShip(useId);
    setCurrentShip(ship);
  }, [store.infoShips, useId]);
  return (
    <>
      {currentShip && (
        <div className="card w-50 mx-auto bg-black rounded text-light">
          <div>
            <div className="d-flex justify-content-center">
              <h3 className="my-4">{currentShip.result.properties.name}</h3>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${currentShip.result.uid}.jpg`}
                className="detailsS-image rounded mx-2"
              />
            </div>
            <div className="d-flex justify-content-center mt-4">
              <div className="mx-3">
                <p className="fw-bold">Cargo Capacity:</p>
                <p>{currentShip.result.properties.cargo_capacity} Kg</p>
              </div>
              <div className="mx-3">
                <p className="fw-bold">Vehicle Class:</p>
                <p>{currentShip.result.properties.vehicle_class}</p>
              </div>
              <div className="mx-3">
                <p className="fw-bold">Consumables:</p>
                <p>{currentShip.result.properties.consumables}</p>
              </div>
              <div className="mx-3">
                <p className="fw-bold">Crew:</p>
                <p className="mx-2">{currentShip.result.properties.crew}</p>
              </div>
              <div className="mx-3">
                <p className="fw-bold">Passengers:</p>
                <p className="mx-4">
                  {currentShip.result.properties.passengers}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsShip;
