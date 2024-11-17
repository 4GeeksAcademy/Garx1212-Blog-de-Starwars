import { toast } from "react-toastify";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: "https://www.swapi.tech/api/",

      infoCharacters: [],
      infoShips: [],
      infoPlanets: [],

      favorites: [],
    },
    actions: {
      getCharacters: async () => {
        const store = getStore();

        const localCharacters = localStorage.getItem("Characters");
        if (localCharacters) {
          setStore({ infoCharacters: JSON.parse(localCharacters) });
          return;
        }

        const response = await fetch(`${store.apiURL}people/`);
        const data = await response.json();
        const characterArray = [];

        for (let character of data.results) {
          const characterResponse = await fetch(character.url);
          const characterData = await characterResponse.json();
          characterArray.push(characterData);
        }
        setStore({ infoCharacters: characterArray });
        localStorage.setItem("Characters", JSON.stringify(characterArray));
      },
      getStarShips: async () => {
        const store = getStore();

        const localStarships = localStorage.getItem("Starships");
        if (localStarships) {
          setStore({ infoShips: JSON.parse(localStarships) });
          return;
        }

        const response = await fetch(`${store.apiURL}vehicles/`);
        const data = await response.json();
        const shipArray = [];

        for (let ship of data.results) {
          const shipResponse = await fetch(ship.url);
          const shipData = await shipResponse.json();
          shipArray.push(shipData);
        }
        setStore({ infoShips: shipArray });
        localStorage.setItem("Starships", JSON.stringify(shipArray));
      },
      getPlanets: async () => {
        const store = getStore();

        const localPlanets = localStorage.getItem("Planets");
        if (localPlanets) {
          setStore({ infoPlanets: JSON.parse(localPlanets) });
          return;
        }

        const response = await fetch(`${store.apiURL}planets/`);
        const data = await response.json();
        const planetsArray = [];

        for (let planet of data.results) {
          const planetResponse = await fetch(planet.url);
          const planetData = await planetResponse.json();
          planetsArray.push(planetData);
        }
        setStore({ infoPlanets: planetsArray });
        localStorage.setItem("Planets", JSON.stringify(planetsArray));
      },
      addFavorite: (element) => {
        const store = getStore();
        const notify = () => toast.success("A new Favorite was added!");

        if (
          store.favorites.find((item) => item.result._id === element.result._id)
        ) {
          toast.error("Already added");
          return;
        }
        const newFavorite = [...store.favorites, element];
        setStore({ favorites: newFavorite });
        notify();
      },
      removeFavorite: (element) => {
        const store = getStore();

        const deleteFavorite = store.favorites.filter(
          (item) => item.result._id !== element.result._id
        );
        setStore({ favorites: deleteFavorite });
        toast.error("Remove!");
      },
      detailsCharacter: (id) => {
        const store = getStore();

        const findDtailsCharacter = store.infoCharacters.find(
          (item) => item.result.uid === id
        );
        return findDtailsCharacter;
      },
      detailsShip: (id) => {
        const store = getStore();

        const findDtailsShip = store.infoShips.find(
          (item) => item.result.uid === id
        );
        return findDtailsShip;
      },
      detailsPlanet: (id) => {
        const store = getStore();

        const findDtailsPlanet = store.infoPlanets.find(
          (item) => item.result.uid === id
        );
        return findDtailsPlanet;
      },
    },
  };
};

export default getState;
