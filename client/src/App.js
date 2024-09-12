import React, {Component} from "react";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import LandingPage from "./pages/LandingPage";
import DiscussionPage from "./pages/DiscussionPage";
import AboutPage from "./pages/AboutPage";

function App () {
    return(
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar/>
                <div className="col-span-5">
                    <Route path="/">
                        <LandingPage/>
                    </Route>
                    <Route path="/discussion">
                        <DiscussionPage/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                </div>
        </div>

    )
}

export default App;