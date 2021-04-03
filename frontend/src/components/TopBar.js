import React from "react";
import { Toolbar, AppBar, IconButton } from "@material-ui/core";
import TimelineIcon from "@material-ui/icons/Timeline";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#c2185b" }}>
          <Toolbar style={{ background: "#3298dc" }}>
            <IconButton>
              <TimelineIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar;
