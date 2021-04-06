import { IconButton, Icon, Tooltip } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";

class RedirectIconButton extends React.Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <Tooltip title={this.props.title}>
            <IconButton
              onClick={() => {
                history.push(this.props.url);
              }}
            >
              <Icon style={{ fontSize: 35 }}>
                <img
                  alt="edit"
                  src={
                    window.location.origin + "/" + this.props.iconName + ".ico"
                  }
                />
              </Icon>
            </IconButton>
          </Tooltip>
        )}
      />
    );
  }
}

export default RedirectIconButton;
