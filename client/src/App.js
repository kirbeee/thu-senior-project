import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
    componentDidMount() {

    }

    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route exact path="/surveys/new" component={SurveyNew}/>
                        <Route/>
                        <Footer/>
                    </div>
                </BrowserRouter>
        );
    }
}

export default App;