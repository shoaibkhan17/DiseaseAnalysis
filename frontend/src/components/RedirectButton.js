import { Button } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";

class RedirectButton extends React.Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <Button
            onClick={() => {
              history.push(this.props.url);
            }}
          >
            {this.props.label}
          </Button>
        )}
      />
    );
  }
}

export default RedirectButton;
