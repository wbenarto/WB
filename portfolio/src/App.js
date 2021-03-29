import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* <Sidebar /> */}
      </div>
      {/* <div className="col-lg-9 app__main-content">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div> */}
    </Router>
  );
}

export default App;
