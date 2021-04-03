import React from "react";
import { Grid } from "@material-ui/core";
import HeartDisease from "./HeartDisease";

class Home extends React.Component {
  render() {
    return (
      <div style={{ width: "99vw" }}>
        <Grid
          container
          justify="center"
          style={{ flexGrow: 1, marginTop: "10vh" }}
          spacing={3}
        >
          <Grid item>
            <HeartDisease />
          </Grid>
          {/* <Grid item>
            <SomeDisease />
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default Home;
