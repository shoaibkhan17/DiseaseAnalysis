import React from "react";
import {
  TextField,
  Button,
  LinearProgress,
  Typography,
  FormControl,
  FormHelperText,
  Select,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import "../styles/styles.css";
import { MenuItem } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";

const START_TRANSMISSION_URL = "http://localhost:5000/predictHeartDisease";

class HeartDisease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 63,
      gender: 1,
      bloodPressure: 145,
      chestPainType: 3,
      serumCholesterol: 233,
      maxHeartRate: 150,
      exerciseAngina: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.startTransmission = this.startTransmission.bind(this);
  }

  componentDidMount() {}

  handleClick() {
    if (!this.state.transmitting) {
      this.startTransmission();
    } else {
      this.setState({ transmitting: false });
    }
  }

  async startTransmission() {
    var obj = {
      age: this.state.age,
      cFreg: this.state.cFreq,
      sampleRate: this.state.sampleRate,
      selectedFile: this.state.selectedFile,
    };

    axios
      .post(START_TRANSMISSION_URL, obj)
      .then((res) => this.setState({ transmitting: true }))
      .catch((error) => this.console.log(error));
  }

  render() {
    return (
      <div className="box">
        <div className="title">
          <Typography
            variant="h6"
            style={{
              paddingBottom: "15px",
              color: "rgb(50, 152, 220)",
              textDecoration: "underline",
            }}
          >
            Enter Cardiovascular Parameters
          </Typography>
        </div>
        <div className="formContainer">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Age"
                placeholder="20"
                variant="outlined"
                fullWidth
                type="number"
                value={this.state.age}
                onChange={(event) => this.setState({ age: event.target.value })}
                style={{ paddingBottom: "4%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  value={this.state.gender}
                  onChange={(event) =>
                    this.setState({ gender: event.target.value })
                  }
                >
                  <MenuItem value={0}>Female</MenuItem>
                  <MenuItem value={1}>Male</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Resting Blood Pressure"
                placeholder="145"
                variant="outlined"
                fullWidth
                type="number"
                value={this.state.bloodPressure}
                onChange={(event) =>
                  this.setState({ bloodPressure: event.target.value })
                }
                style={{ paddingBottom: "4%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Chest Pain Type (mm Hg)</InputLabel>
                <Select
                  label="Chest Pain Type (mm Hg)"
                  value={this.state.chestPainType}
                  onChange={(event) =>
                    this.setState({ chestPainType: event.target.value })
                  }
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Serum Cholesterol (mg/dl)"
                placeholder="233"
                variant="outlined"
                fullWidth
                type="number"
                value={this.state.serumCholesterol}
                onChange={(event) =>
                  this.setState({ serumCholesterol: event.target.value })
                }
                style={{ paddingBottom: "4%" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Maximum Heart Rate (BPM)"
                placeholder="150"
                variant="outlined"
                fullWidth
                type="number"
                value={this.state.maxHeartRate}
                onChange={(event) =>
                  this.setState({ maxHeartRate: event.target.value })
                }
                style={{ paddingBottom: "4%" }}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Exercise Induced Angina</InputLabel>
                <Select
                  label=">Exercise Induced Angina"
                  value={this.state.exerciseAngina}
                  onChange={(event) =>
                    this.setState({ exerciseAngina: event.target.value })
                  }
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Yes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>

        <div className="buttonContainer">
          <Button
            variant="contained"
            fullWidth
            color={this.state.transmitting ? "secondary" : "primary"}
            // onClick={this.handleClick}
          >
            {this.state.transmitting ? "Stop Transmitting" : "Predict"}
          </Button>
          {this.state.transmitting && (
            <LinearProgress color="primary" style={{ color: "#33eb91" }} />
          )}
        </div>
      </div>
    );
  }
}

export default HeartDisease;
