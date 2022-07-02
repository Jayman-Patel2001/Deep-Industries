import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Inquiry from "./components/Inquiry";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product1 from "./components/Product1";
import Product2 from "./components/Product2";
import Product3 from "./components/Product3";
import Product4 from "./components/Product4";
import Product5 from "./components/Product5";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/product/">
            <Product />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/product/sodiumpellets">
            <Product1 />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/product/potasspellets">
            <Product2 />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/product/sodiumpowder">
            <Product3 />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/product/potasspowder">
            <Product4 />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/product/parawax">
            <Product5 />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/inquiry">
            <Inquiry />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
