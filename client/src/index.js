import React from "react";
import ReactDOM from "react-dom/client";

import AuthContextProvider from "./context/AuthContext";
import GoodDeedsContextProvider from "./context/GoodDeedsContext";
import UserGoodDeedsContextProvider from "./context/UserGoodDeedsContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <GoodDeedsContextProvider>
      <UserGoodDeedsContextProvider>
        <App />{" "}
      </UserGoodDeedsContextProvider>
    </GoodDeedsContextProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
