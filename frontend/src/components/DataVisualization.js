import React, { PureComponent } from "react";
import { Button, Typography, Grid } from "@material-ui/core";
import "../styles/styles.css";
import { COLORS } from "../constants";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import RedirectButton from "./RedirectButton";

class DataVisualization extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.testGraph = this.testGraph.bind(this);
    this.maleToFemaleHeartDisease = this.maleToFemaleHeartDisease.bind(this);
    this.chestPainToHeartDisease = this.chestPainToHeartDisease.bind(this);
    this.exercisedToHeartDisease = this.exerciseToHeartDisease.bind(this);
    this.fastingBloodToHeartDisease = this.fastingBloodToHeartDisease.bind(
      this
    );
    this.vesselsColoredHeartDisease = this.vesselsColoredHeartDisease.bind(
      this
    );
  }

  componentDidMount() {}

  testGraph() {
    const data = [
      {
        name: "Patient 1",
        trestbps: 145,
        chol: 233,
      },
      {
        name: "Patient 2",
        trestbps: 130,
        chol: 250,
      },
      {
        name: "Patient 3",
        trestbps: 130,
        chol: 204,
      },
      {
        name: "Patient 4",
        trestbps: 120,
        chol: 236,
      },
      {
        name: "Patient 5",
        trestbps: 120,
        chol: 354,
      },
      {
        name: "Patient 6",
        trestbps: 140,
        chol: 192,
      },
      {
        name: "Patient 7",
        trestbps: 120,
        chol: 294,
      },
    ];

    return (
      <div className="graphCard">
        <Typography>
          Line chart of Resting blood pressure and maximum heart rate
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="chol" stroke="#8884d8" />
            <Line type="monotone" dataKey="trestbps" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  chestPainToHeartDisease() {
    const data = [
      {
        name: "Typical Angina",
        heartDisease: 39,
        noDisease: 102,
      },
      {
        name: "Atypical Angina",
        heartDisease: 41,
        noDisease: 9,
      },
      {
        name: "Non-Anginal Pain",
        heartDisease: 68,
        noDisease: 18,
      },
      {
        name: "Asymptomatic",
        heartDisease: 16,
        noDisease: 7,
      },
    ];

    return (
      <div className="graphCard" style={{ minWidth: "615px" }}>
        <Typography>
          Number of Individuals with different types of chest pain
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="heartDisease" name="Heart Disease" fill={COLORS[0]} />
            <Bar dataKey="noDisease" name="No Heart Disease" fill={COLORS[1]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  vesselsColoredHeartDisease() {
    const data = [
      {
        name: "0",
        heartDisease: 129,
        noDisease: 44,
      },
      {
        name: "1",
        heartDisease: 21,
        noDisease: 44,
      },
      {
        name: "2",
        heartDisease: 7,
        noDisease: 31,
      },
      {
        name: "3",
        heartDisease: 3,
        noDisease: 17,
      },
    ];

    return (
      <div className="graphCard" style={{ width: "420px" }}>
        <Typography>
          Number of major vessels (0-3) colored by fluoroscopy
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="heartDisease" name="Heart Disease" fill={COLORS[0]} />
            <Bar dataKey="noDisease" name="No Heart Disease" fill={COLORS[1]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  fastingBloodToHeartDisease() {
    const data = [
      {
        name: "Fasting blood sugar & glucose at level",
        heartDisease: 23,
        noDisease: 23,
      },
      {
        name: "Fasting blood sugar & glucose not at level",
        heartDisease: 141,
        noDisease: 116,
      },
    ];

    return (
      <div className="graphCard" style={{ minWidth: "711px" }}>
        <Typography>
          Number of Individuals with fasting blood sugar {"&"} glucose at level
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="heartDisease" name="Heart Disease" fill={COLORS[0]} />
            <Bar dataKey="noDisease" name="No Heart Disease" fill={COLORS[1]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  exerciseToHeartDisease() {
    const data = [
      {
        name: "Exercise Induced Angina",
        heartDisease: 23,
        noDisease: 74,
      },
      {
        name: "No Exercise Induced Angina",
        heartDisease: 141,
        noDisease: 62,
      },
    ];

    return (
      <div className="graphCard" style={{ minWidth: "575px" }}>
        <Typography>
          Number of Individuals with Exercise Induced Angina
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="heartDisease" name="Heart Disease" fill={COLORS[0]} />
            <Bar dataKey="noDisease" name="No Heart Disease" fill={COLORS[1]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  maleToFemaleHeartDisease() {
    const data = [
      {
        name: "Male",
        heartDisease: 93,
        noDisease: 112,
      },
      {
        name: "Female",
        heartDisease: 71,
        noDisease: 24,
      },
    ];

    return (
      <div className="graphCard">
        <Typography>Gender Radio</Typography>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="heartDisease" name="Heart Disease" fill={COLORS[0]} />
            <Bar dataKey="noDisease" name="No Heart Disease" fill={COLORS[1]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "90vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <div style={{ marginTop: "3vh" }}>
          <Typography variant="h4">Heart Disease Visualization</Typography>

          <RedirectButton
            label="Click here for an interactive heart disease prediction"
            url="/heart-disease-prediction"
          />
        </div>

        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          style={{ flexGrow: 1, marginTop: "2vh" }}
          spacing={5}
        >
          <Grid item> {this.testGraph()} </Grid>
          <Grid item> {this.exerciseToHeartDisease()} </Grid>
          <Grid item> {this.maleToFemaleHeartDisease()} </Grid>
          <Grid item> {this.chestPainToHeartDisease()} </Grid>
          <Grid item> {this.fastingBloodToHeartDisease()} </Grid>
          <Grid item> {this.vesselsColoredHeartDisease()} </Grid>
        </Grid>
      </div>
    );
  }
}

export default DataVisualization;
