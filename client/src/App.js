import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import DiscussionPage from "./pages/DiscussionPage";
import AboutPage from "./pages/AboutPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Sidebar from "./components/Sidebar";
import TablePage from "./pages/example-page/TablePage";
import ButtonPage from "./pages/example-page/ButtonPage";
import ModalPage from "./pages/example-page/ModalPage";
import DropdownPage from "./pages/example-page/DropdownPage";
import AccordionPage from "./pages/example-page/AccordianPage";


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
                        // Example page
                        <Route path="/table" element={<TablePage/>}/>
                        <Route path="/button" element={<ButtonPage/>}/>
                        <Route path="/modal" element={<ModalPage/>}/>
                        <Route path="/dropdown" element={<DropdownPage/>}/>
                        <Route path="/accordion" element={<AccordionPage/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;