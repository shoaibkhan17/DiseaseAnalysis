import React from "react";
import TopBar from "./TopBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HeartDisease from "./HeartDisease";
import { BACKGROUND_COLOR } from "../constants";
import StrokeDisease from "./StrokeDisease";
import LiverDisease from "./LiverDisease";
import DataVisualization from "./DataVisualization";

class Main extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          background: BACKGROUND_COLOR,
        }}
      >
        <Router>
          <TopBar />
          <Switch>
            <Route
              path="/heart-disease-prediction"
              component={() => <HeartDisease />}
            />

            <Route
              path="/heart-disease-visualization"
              component={() => <DataVisualization />}
            />

            <Route
              path="/stroke-disease-prediction"
              component={() => <StrokeDisease />}
            />

            <Route
              path="/liver-disease-prediction"
              component={() => <LiverDisease />}
            />

            <Route render={() => <Redirect to="/heart-disease-prediction" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
