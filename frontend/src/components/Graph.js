import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "../constants";

const defaultData = [
  {
    name: "Disease",
    probability: 0,
  },
  {
    name: "No Disease",
    probability: 0,
  },
];

class Graph extends PureComponent {
  render() {
    return (
      <div className="graphBox">
        {this.props.accuracy === 0
          ? ""
          : "Prediction Accuracy: " + this.props.accuracy + "%"}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={this.props.data.length === 0 ? defaultData : this.props.data}
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
            <Bar dataKey="probability" fill="#000000">
              {this.props.data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  strokeWidth={index === 2 ? 4 : 1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        Probability at risk of {this.props.title}
      </div>
    );
  }
}

export default Graph;
