import './index.css'
import React from "react";
import App from "./App";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./store";

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
    <App/>
    </Provider>
);