import './index.css'
import React from "react";
import ReactDOM from  "react-dom/client";
import App from "./App";
import {NavigationProvider} from "./context/navigation";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <Header/>
        <App/>
        <Footer />
    </NavigationProvider>
)