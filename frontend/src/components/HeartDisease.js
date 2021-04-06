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
import RedirectButton from "./RedirectButton";

class HeartDisease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 63,
      sex: 1,
      bloodPressure: 145,
      chestPainType: 3,
      serumCholesterol: 233,
      maxHeartRate: 150,
      exerciseAngina: 0,
      bloodSugar: 1,
      vesselsColored: 0,
      accuracy: 0,
      results: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.firstColumn = this.firstColumn.bind(this);
    this.secondColumn = this.secondColumn.bind(this);
    this.thirdColumn = this.thirdColumn.bind(this);
    this.fourthColumn = this.fourthColumn.bind(this);
    this.heartDiseaseForm = this.heartDiseaseForm.bind(this);
    this.extractResponse = this.extractResponse.bind(this);
  }

  componentDidMount() {}

  async handleClick() {
    var obj = {
      disease: "heart",
      age: this.state.age,
      sex: this.state.sex,
      chestPainType: this.state.chestPainType,
      bloodPressure: this.state.bloodPressure,
      serumCholesterol: this.state.serumCholesterol,
      bloodSugar: this.state.bloodSugar,
      vesselsColored: this.state.vesselsColored,
      maxHeartRate: this.state.maxHeartRate,
      exerciseAngina: this.state.exerciseAngina,
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
        name: "Heart Disease",
        probability: data.diseaseProb,
      },
      {
        name: "No Heart Disease",
        probability: data.nonDiseaseProb,
      },
    ];

    this.setState({ results: results });
    this.setState({ accuracy: data.accuracy });
  }

  heartDiseaseForm() {
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
              Enter Cardiovascular Parameters
            </Typography>
          </Grid>

          <Grid item>{this.firstColumn()}</Grid>

          <Grid item>{this.secondColumn()}</Grid>

          <Grid item>{this.thirdColumn()}</Grid>

          <Grid item>{this.fourthColumn()}</Grid>

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
        <Grid item xs={4}>
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
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Sex</InputLabel>
            <Select
              label="Sex"
              value={this.state.sex}
              onChange={(event) => this.setState({ sex: event.target.value })}
            >
              <MenuItem value={0}>Female</MenuItem>
              <MenuItem value={1}>Male</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Chest Pain Type</InputLabel>
            <Select
              label="Chest Pain Type"
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
    );
  }

  secondColumn() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <TextField
            label="Resting Blood Pressure (mm Hg)"
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
        <Grid item xs={5}>
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
    );
  }

  thirdColumn() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>
              Fasting Blood Sugar {"&"} Glucose (120 mg/dl)
            </InputLabel>
            <Select
              label={"Fasting Blood Sugar & Glucose (120 mg/dl)"}
              value={this.state.bloodSugar}
              onChange={(event) =>
                this.setState({ bloodSugar: event.target.value })
              }
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={5}>
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
      </Grid>
    );
  }

  fourthColumn() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Major Vessels Colored</InputLabel>
            <Select
              label={"Major Vessels Colored"}
              value={this.state.vesselsColored}
              onChange={(event) =>
                this.setState({ vesselsColored: event.target.value })
              }
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
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
      </Grid>
    );
  }

  render() {
    return (
      <div style={{ width: "95vw" }}>
        <div style={{ marginTop: "3vh" }}>
          <Typography variant="h4">Heart Disease Prediction</Typography>

          <RedirectButton
            label="Click here for heart disease prediction"
            url="/heart-disease-visualization"
          />
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
            {this.heartDiseaseForm()}
          </Grid>
          <Grid item style={{ minWidth: "30vw" }}>
            <Graph
              data={this.state.results}
              title="Heart Disease"
              accuracy={this.state.accuracy}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HeartDisease;
