import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Main } from "./components";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
