import React from "react";
import Chart from "react-apexcharts";

interface BarChartProps {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  data: any;
  type?:
    | "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar";
  options?: any;
  labels?: string[];
}

const defaultOptions = {
  chart: {
    fontFamily: "inherit",
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      speed: 400,
    },
    stacked: true,
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    padding: {
      top: -20,
      right: 0,
      left: -4,
      bottom: -4,
    },
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    type: "datetime",
  },
  yaxis: {
    labels: {
      padding: 4,
    },
  },
  colors: ["#406abf", "#40aabf", "#81e391"],
  legend: {
    show: false,
  },
};

const BarChart = ({ data, type, labels, options }: BarChartProps) => (
  <Chart
    series={data}
    type={type as any}
    height={284}
    width="100%"
    options={Object.assign({}, defaultOptions, options, { labels })}
  />
);

export default BarChart;
