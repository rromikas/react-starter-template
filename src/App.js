import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="container-fluid p-2 p-sm-3 p-md-4">
          <div className="row no-gutters">
            <Switch>
              <Route exact path="/" component={Projects}></Route>
              <Route exact path="/projects" component={Projects}></Route>
              <Route exact path="/calendar" component={Calendars}></Route>
              <Route exact path="/activity" component={Activity}></Route>
              <Route
                exact
                path="/:userId/projects/:projectId"
                component={ProjectDashboard}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
