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

class LiverDisease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 65,
      gender: 0,
      totalProteins: 6.8,
      totalBilirubin: 0.7,
      alkalinePhosphatase: 187,
      alamineAminotransferase: 16,
      aspartateAminotransferase: 18,
      albumin: 3.3,
      albuminGlobulinRatio: 0.9,
      accuracy: 0,
      results: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.firstColumn = this.firstColumn.bind(this);
    this.secondColumn = this.secondColumn.bind(this);
    this.thirdColumn = this.thirdColumn.bind(this);
    this.fourthColumn = this.fourthColumn.bind(this);
    this.liverDiseaseForm = this.liverDiseaseForm.bind(this);
    this.extractResponse = this.extractResponse.bind(this);
  }

  componentDidMount() {}

  async handleClick() {
    var obj = {
      disease: "liver",
      age: this.state.age,
      gender: this.state.gender,
      totalProteins: this.state.totalProteins,
      totalBilirubin: this.state.totalBilirubin,
      alkalinePhosphatase: this.state.alkalinePhosphatase,
      alamineAminotransferase: this.state.alamineAminotransferase,
      aspartateAminotransferase: this.state.aspartateAminotransferase,
      albumin: this.state.albumin,
      albuminGlobulinRatio: this.state.albuminGlobulinRatio,
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
        name: "Liver Disease",
        probability: data.diseaseProb,
      },
      {
        name: "No Liver Disease",
        probability: data.nonDiseaseProb,
      },
    ];

    this.setState({ results: results });
    this.setState({ accuracy: data.accuracy });
  }

  liverDiseaseForm() {
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
              Enter Liver Disease Parameters
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
            placeholder="65"
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
        <Grid item xs={4}>
          <TextField
            label="Total Proteins"
            placeholder="6.8"
            variant="outlined"
            fullWidth
            type="number"
            value={this.state.totalProteins}
            onChange={(event) =>
              this.setState({ totalProteins: event.target.value })
            }
            style={{ paddingBottom: "4%" }}
          />
        </Grid>
      </Grid>
    );
  }

  secondColumn() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Total Bilirubin"
            placeholder="0.7"
            variant="outlined"
            fullWidth
            type="number"
            value={this.state.totalBilirubin}
            onChange={(event) =>
              this.setState({ totalBilirubin: event.target.value })
            }
            style={{ paddingBottom: "4%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Alkaline Phosphatase"
            placeholder="187"
            variant="outlined"
            fullWidth
            type="number"
            value={this.state.alkalinePhosphatase}
            onChange={(event) =>
              this.setState({ alkalinePhosphatase: event.target.value })
            }
            style={{ paddingBottom: "4%" }}
          />
        </Grid>
      </Grid>
    );
  }

  thirdColumn() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Alamine Aminotransferase"
            placeholder="16"
            variant="outlined"
            fullWidth
            type="number"
            value={this.state.alamineAminotransferase}
            onChange={(event) =>
              this.setState({ alamineAminotransferase: event.target.value })
            }
            style={{ paddingBottom: "4%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Aspartate Aminotransferase"
            placeholder="18"
            variant="outlined"
            fullWidth
            type="number"
            value={this.state.aspartateAminotransferase}
            onChange={(event) =>
              this.setState({ aspartateAminotransferase: event.target.value })
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
          <TextField
            label="Albumin"
            placeholder="3.3"
            variant="outlined"
            fullWidth
            type="number"
            value={this.state.albumin}
            onChange={(event) => this.setState({ albumin: event.target.value })}
            style={{ paddingBottom: "4%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Albumin and Globulin Ratio"
            placeholder="0.9"
            variant="outlined"
            fullWidth
            type="number"
            value={this.state.albuminGlobulinRatio}
            onChange={(event) =>
              this.setState({ albuminGlobulinRatio: event.target.value })
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
          <Typography variant="h4">Liver Disease Prediction</Typography>

          {/* <RedirectButton
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
            {this.liverDiseaseForm()}
          </Grid>
          <Grid item style={{ minWidth: "30vw" }}>
            <Graph
              data={this.state.results}
              title="Liver Disease"
              accuracy={this.state.accuracy}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LiverDisease;
