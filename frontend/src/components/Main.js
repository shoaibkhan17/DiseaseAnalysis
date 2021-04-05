import React from "react";
import TopBar from "./TopBar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HeartDisease from "./HeartDisease";

class Main extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Router>
          <TopBar />
          <Switch>
            <Route
              path="/heart-disease-prediction"
              component={() => <HeartDisease />}
            />
            <Route
              path="/stroke-disease-prediction"
              component={() => <div>Stroke</div>}
            />
            <Route
              path="/liver-disease-prediction"
              component={() => <div>Liver</div>}
            />
            <Route render={() => <Redirect to="/heart-disease-prediction" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
