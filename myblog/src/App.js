import React, { Component } from "react";
import Header from "./common/header/index";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/pages/home/index.js";
import Detail from "../src/pages/detail/index.js";
import Login from "./pages/login/index";
import Write from "./pages/write/index";
import LoadableComponent from "./pages/detail/loadable";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/mllblog">
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route
              path="/detail/:id"
              exact
              component={LoadableComponent}
            ></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
