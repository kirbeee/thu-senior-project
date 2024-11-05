import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import DiscussionPage from "./pages/DiscussionPage";
import AboutPage from "./pages/AboutPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/auth-page/LoginPage";
import LogoutPage from "./pages/auth-page/LogoutPage";
import StudentSignupPage from "./pages/auth-page/StudentSignupPage";
import RegistrationSelector from "./pages/auth-page/RegistrationSelector";
import TeacherSignupPage from "./pages/auth-page/TeacherSignupPage";
import VisitorSignupPage from "./pages/auth-page/VisitorSignupPage";


function App() {
    return (
        <Router>
            <Header/>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 mt-4">

                <Sidebar/>
                <div className="col-span-5">
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/discussion" element={<DiscussionPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/logout" element={<LogoutPage/>}/>
                        <Route path="/visitor/signup" element={<VisitorSignupPage/>}/>
                        <Route path="/student/signup" element={<TeacherSignupPage/>}/>
                        <Route path="/teacher/signup" element={<StudentSignupPage/>}/>
                        <Route path="/register/select" element={<RegistrationSelector/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;