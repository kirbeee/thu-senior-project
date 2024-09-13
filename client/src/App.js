import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import DiscussionPage from "./pages/DiscussionPage";
import AboutPage from "./pages/AboutPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App () {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;