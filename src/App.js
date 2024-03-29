import React from "react";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import ProjectDetail from './components/Projects/ProjectDetail'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";


function App() {
  return (

    // v1.0
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetail />
        </Route>
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
