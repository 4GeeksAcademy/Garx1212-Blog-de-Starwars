import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home.jsx";
import { Single } from "./views/single.jsx";
import DetailsC from "./views/DetailsC.jsx";
import DetailsP from "./views/DetailsP.jsx";
import DetailsS from "./views/DetailsS.jsx";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/characters/:useId" element={<DetailsC />} />
            <Route path="/details/planets/:useId" element={<DetailsP />} />
            <Route path="/details/ships/:useId" element={<DetailsS />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="*" element={<h1>Error: Not found</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);