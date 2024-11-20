import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="justify-content-center mt-3">
      <div>
        <h1 className="bg-black fw-bold w-100 rounded">Planets</h1>
      </div>
      <div className="d-flex overflow-auto">
        {store.infoPlanets.map((item) => {
          console.log(item);
          return (
            <div
              className="container w-70 mt-4"
              key={item.result.uid + "planets"}
            >
              <div className="card card-star-wars bg-black">
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${item.result.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
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
                    to={`/details/planets/${item.result.uid}`}
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

export default Planets;
