import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import DiscussionPage from "./pages/DiscussionPage";
import AboutPage from "./pages/AboutPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import SignupPage from "./pages/SignupPage";


function App() {
    return (
        <Router>
            <Header/>
            <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
                <Sidebar/>
                <div className="col-span-5">
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/discussion" element={<DiscussionPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/logout" element={<LogoutPage/>}/>
                        <Route path="/signup" element={<SignupPage/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;