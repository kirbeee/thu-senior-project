import React from 'react'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from './components/App';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

const store = createStore(() => [], {}, applyMiddleware());

root.render(<Provider store={store}><App /></Provider>);