import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

require("./App.css")


function App() {
  return (
    <div className="newBody">
      <Router>
        <div>
          <Nav />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
