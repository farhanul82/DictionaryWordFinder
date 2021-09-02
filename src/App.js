import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch,useLocation } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Combinreducers";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import Headers from "./Components/Headers";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Router>
              <Headers/>
              <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/favourites" component={Favourites} />
              </Switch>
            </Router>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
