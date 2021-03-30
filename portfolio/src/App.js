import React from "react";
import Contact from "./components/Contact";
import LandingPage from "./pages/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Information from "./components/Information";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/information">
          <Information />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {/* <Route>
          <Redirect to="/" />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
