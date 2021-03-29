import React from "react";
import Sidebar from "./components/Sidebar";
import LandingPage from "./pages/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
// import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/information">
          <Resume />
        </Route>
        {/* <Route path="/projects">
          <Projects />
        </Route> */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
