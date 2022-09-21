import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import NavBar from "./nav/nav-bar";
import Footer from "./nav/footer";
import Icons from "../helpers/icons";
import About from "./pages/about";
import Contact from "./pages/contact";
import Forum from "./pages/forum";
import Home from "./pages/home";
import LogOn from "./pages/logon";
import SignUp from "./pages/signup";
import NoMatch from "./pages/notfound";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();


  }



  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavBar />
            <h1>DevCamp React Starter</h1>
            <h2>React Redux Router</h2>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about-us' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/forum' component={Forum} />
              <Route path='/logon' component={LogOn} />
              <Route path='/signup' component={SignUp} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
