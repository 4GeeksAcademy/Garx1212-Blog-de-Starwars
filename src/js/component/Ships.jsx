import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Ships = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="justify-content-center mt-3">
      <div>
        <h1 className="bg-black fw-bold w-100 rounded">Ships</h1>
      </div>
      <div className="d-flex overflow-auto">
        {store.infoShips.map((item) => {
          return (
            <div
              className="container w-70 mt-4"
              key={item.result.uid + "ships"}
            >
              <div class="card card-star-wars bg-black">
                <img
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${item.result.uid}.jpg`}
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">{item.result.properties.name}</h5>

                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => actions.addFavorite(item)}
                  >
                    <i class="fa-regular fa-heart"></i>
                  </button>
                  <Link
                    to={`/details/ships/${item.result.uid}`}
                    className="btn btn-outline-primary my-2"
                  >
                    <i class="fa-solid fa-eye"></i>
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

export default Ships;
