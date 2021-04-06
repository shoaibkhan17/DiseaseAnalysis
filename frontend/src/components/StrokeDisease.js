import React from "react";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  Select,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import "../styles/styles.css";
import { MenuItem } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import Graph from "./Graph";
import { DEFAULT_COLOR, PREDICTION_API_URL } from "../constants";

class StrokeDisease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 67,
      gender: 1,
      bmi: 36.6,
      hypertension: 0,
      avgGlucoseLevel: 228.69,
      heartDisease: 1,
      accuracy: 0,
      results: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.firstColumn = this.firstColumn.bind(this);
    this.secondColumn = this.secondColumn.bind(this);
    this.thirdColumn = this.thirdColumn.bind(this);
    this.strokeDiseaseForm = this.strokeDiseaseForm.bind(this);
    this.extractResponse = this.extractResponse.bind(this);
  }

  componentDidMount() {}

  async handleClick() {
    var obj = {
      disease: "stroke",
      age: this.state.age,
      gender: this.state.gender,
      bmi: this.state.bmi,
      hypertension: this.state.hypertension,
      avgGlucoseLevel: this.state.avgGlucoseLevel,
      heartDisease: this.state.heartDisease,
    };

    axios
      .post(PREDICTION_API_URL, obj)
      .then((res) => this.extractResponse(res.data))
      .catch((error) => console.log(error));
  }

  extractResponse(data) {
    if (data === "No Disease Option Specified") {
      return;
    }

    var results = [
      {
        name: "Stroke Disease",
        probability: data.diseaseProb,
      },
      {
        name: "No Stroke Disease",
        probability: data.nonDiseaseProb,
      },
    ];

    this.setState({ results: results });
    this.setState({ accuracy: data.accuracy });
  }

  strokeDiseaseForm() {
    return (
      <div className="box">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          spacing={5}
        >
          <Grid item>
            <Typography
              variant="h6"
              style={{
                paddingBottom: "15px",
                color: "#F51F1F",
                textDecoration: "underline",
              }}
            >
              Enter Stroke Disease Parameters
            </Typography>
          </Grid>

          <Grid item>{this.firstColumn()}</Grid>

          <Grid item>{this.secondColumn()}</Grid>

          <Grid item>{this.thirdColumn()}</Grid>

          <Grid item>
            <Button
              variant="contained"
              fullWidth
              style={{
                background: DEFAULT_COLOR,
                color: "white",
              }}
              onClick={this.handleClick}
            >
              Predict
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }

  firstColumn() {
    return (
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
    );
  }

  secondColumn() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Hypertension</InputLabel>
            <Select
              label="Hypertension"
              value={this.state.hypertension}
              onChange={(event) =>
                this.setState({ hypertension: event.target.value })
              }
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Heart Disease</InputLabel>
            <Select
              label="Heart Disease"
              value={this.state.heartDisease}
              onChange={(event) =>
                this.setState({ heartDisease: event.target.value })
              }
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  thirdColumn() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            label="Average Glucose Level (mmol/L)"
            placeholder="228.69"
            variant="outlined"
            fullWidth
            type="number"
            value={this.state.avgGlucoseLevel}
            onChange={(event) =>
              this.setState({ avgGlucoseLevel: event.target.value })
            }
            style={{ paddingBottom: "4%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="BMI"
            placeholder="36.6"
            variant="outlined"
            fullWidth
            type="number"
            value={this.state.bmi}
            onChange={(event) => this.setState({ bmi: event.target.value })}
            style={{ paddingBottom: "4%" }}
          />
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <div style={{ width: "95vw" }}>
        <div style={{ marginTop: "3vh" }}>
          <Typography variant="h4">Stroke Disease Prediction</Typography>
          {/* 
          <RedirectButton
            label="Click here for heart disease prediction"
            url="/heart-disease-visualization"
          /> */}
        </div>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          style={{ flexGrow: 1, marginTop: "5vh" }}
          spacing={5}
        >
          <Grid item style={{ minWidth: "30vw" }}>
            {this.strokeDiseaseForm()}
          </Grid>
          <Grid item style={{ minWidth: "30vw" }}>
            <Graph
              data={this.state.results}
              title="Stroke Disease"
              accuracy={this.state.accuracy}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default StrokeDisease;
