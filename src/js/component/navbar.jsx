import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <nav className="navbar bg-body-tertiary bg-black">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-light fw-bold mx-2">
            Star Wars
          </Link>

          <div className="dropdown">
            <button
              className="btn btn-danger"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-solid fa-heart text-light"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end fw-bold">
              <h5 className="mx-3 mt-2">
                <p className="fw-bold">Favorites</p>
              </h5>
              {store.favorites.map((item) => {
                return (
                  <div className="d-flex justify-content-between">
                    <div className="mx-3">
                      <p>{item.result.properties.name}</p>
                    </div>
                    <div>
                      <button
                        className="btn btn-outline-danger my-2 mx-2"
                        type="button"
                        onClick={() => actions.removeFavorite(item)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
              <li className="mx-3">
                <p className="text-danger">_______________________</p>
              </li>
              <div className="d-flex justify-content-end mx-3"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
