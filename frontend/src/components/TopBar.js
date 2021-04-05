import React from "react";
import { Toolbar, AppBar, IconButton, Icon } from "@material-ui/core";
import TimelineIcon from "@material-ui/icons/Timeline";
import RedirectIconButton from "./RedirectIconButton";
import { DEFAULT_COLOR } from "../constants";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            style={{
              background: DEFAULT_COLOR,
            }}
          >
            <RedirectIconButton
              title="Heart Disease Prediction"
              iconName="heart"
              url="/heart-disease-prediction"
            />
            <RedirectIconButton
              title="Stroke Disease Prediction"
              iconName="head"
              url="/stroke-disease-prediction"
            />
            <RedirectIconButton
              title="Liver Disease Prediction"
              iconName="liver"
              url="/liver-disease-prediction"
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar;
