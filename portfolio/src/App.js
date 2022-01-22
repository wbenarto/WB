import React from "react";
import Contact from "./components/Contact";
import LandingPage from "./pages/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectDetail from './components/Projects/ProjectDetail'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Information from "./components/Information";

function App() {
  return (
    // v2.0
    // <Router>
    //   <LandingPage />
    // </Router>

    // v1.0
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Switch> */}
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetail />
        </Route>
        
        {/* <Route path="/">
          <Projects />
        </Route> */}
        {/* <Route path="/information">
          <Information />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route> */}
        {/* <Route>
          <Redirect to="/" />
        </Route> */}
        {/* </Switch> */}
      </Router>
      <Footer />
    </>
  );
}

export default App;
