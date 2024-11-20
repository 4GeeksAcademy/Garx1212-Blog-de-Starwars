import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="justify-content-start mt-3 ronunded">
      <div>
        <h1 className="bg-black fw-bold w-100 rounded">Characters</h1>
      </div>
      <div className="d-flex overflow-auto">
        {store.infoCharacters.map((item) => {
          console.log(item);
          return (
            <div className="mx-2 mt-4" key={item.result.uid + "characters"}>
              <div className="card card-star-wars bg-black">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.result.uid}.jpg`}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.result.properties.name}</h5>

                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => actions.addFavorite(item)}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <Link
                    to={`/details/characters/${item.result.uid}`}
                    className="btn btn-outline-primary my-2"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
