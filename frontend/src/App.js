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
import AccountPage from "./pages/AccountPage";
import BoardsList from "./pages/bbs/BoardList";
import PostsList from "./pages/bbs/PostsList";
import PostDetail from "./pages/bbs/PostDetail";
import CreatePost from "./pages/bbs/CreatePost";
import CoursePage from "./pages/CoursePage";
import BoardDetail from "./pages/bbs/BoardDetail";

function App() {
    return (
        <Router>
            <Header/>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 mt-4">
                <Sidebar/>
                <div className="col-span-5">
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>

                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/logout" element={<LogoutPage/>}/>
                        <Route path="/visitor/signup" element={<VisitorSignupPage/>}/>
                        <Route path="/student/signup" element={<StudentSignupPage/>}/>
                        <Route path="/teacher/signup" element={<TeacherSignupPage/>}/>
                        <Route path="/register/select" element={<RegistrationSelector/>}/>
                        <Route path="/account" element={<AccountPage/>}/>

                        <Route path="/bbs" element={<DiscussionPage/>}/>
                        <Route path="/bbs/boards" element={<BoardsList />} />
                        <Route path="/bbs/board/:id" element={<BoardDetail />} />
                        <Route path="/bbs/posts" element={<PostsList />} />
                        <Route path="/bbs/posts/:id" element={<PostDetail />} />
                        <Route path="/bbs/posts/new" element={<CreatePost />} />

                        <Route path="/courses" element={<CoursePage />}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;