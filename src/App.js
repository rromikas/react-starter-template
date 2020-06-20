import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

const Landing = () => {
  return (
    <div className="logo-container">
      <img
        className="react-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
      ></img>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
