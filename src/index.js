import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FetchData } from "./Component/User/Context/DataContext";

import { BrowserRouter } from "react-router-dom";
import Cartcontext from "./Component/User/Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FetchData>
      <Cartcontext>
        <App />
      </Cartcontext>
    </FetchData>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
