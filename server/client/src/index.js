// 1) Import ReactDOM library
import React from 'react'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// 2) Import App component as usual
import App from './components/App';

// 3) Get a reference to the div with ID root
const el = document.getElementById("root");

// 4) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

const store = createStore(() => [], {}, applyMiddleware());

// 5) Show the component on the screen
root.render(<Provider store={store}><App /></Provider>);