import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetailsCharacter = () => {
  const { store, actions } = useContext(Context);
  const [currentCharacter, setCurrentCharacter] = useState();
  const { useId } = useParams();

  useEffect(() => {
    const character = actions.detailsCharacter(useId);
    setCurrentCharacter(character);
  }, [store.infoCharacters, useId]);
  return (
    <>
      {currentCharacter && (
        <div className="card character-card mx-auto bg-black rounded text-light">
          <div>
            <div className="d-flex justify-content-center">
              <h3 className="my-4">
                {currentCharacter.result.properties.name}
              </h3>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${currentCharacter.result.uid}.jpg`}
                className="detailsC-image rounded"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center my-4">
            <div className="mx-3">
              <p className="fw-bold">Birth Year:</p>
              <p>{currentCharacter.result.properties.birth_year}</p>
            </div>
            <div className="mx-3">
              <p className="fw-bold">Gender:</p>
              <p>{currentCharacter.result.properties.gender}</p>
            </div>
            <div className="mx-3">
              <p className="fw-bold">Skin Color:</p>
              <p>{currentCharacter.result.properties.skin_color}</p>
            </div>
            <div className="mx-3">
              <p className="fw-bold">Eye Color:</p>
              <p>{currentCharacter.result.properties.eye_color}</p>
            </div>
            <div className="mx-3">
              <p className="fw-bold">Height:</p>
              <p>{currentCharacter.result.properties.height} cm</p>
            </div>
            <div className="mx-3">
              <p className="fw-bold">Mass:</p>
              <p>{currentCharacter.result.properties.mass} Kg</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsCharacter;
