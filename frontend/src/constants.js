export const COLORS = ["#a31545", "#357a38"];

export const DEFAULT_COLOR =
  "linear-gradient(to top left, #ff0000 0%, #000000  112%)";

export const BACKGROUND_COLOR =
  "radial-gradient(circle, rgb(212, 156, 156) 0%, rgb(110, 106, 106) 100%)";

var endpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "https://diseaseanalysis.herokuapp.com/";

export const PREDICTION_API_URL = endpoint + "/predictDisease";
