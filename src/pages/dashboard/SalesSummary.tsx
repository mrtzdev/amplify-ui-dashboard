import React from "react";
import Chart from "react-apexcharts";

interface SalesSummaryProps {
  title?: string;
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
  toolbar: {
    show: false,
  },
  chart: {
    toolbar: {
      show: false,
    },
  },

  colors: ["#5f71e4", "#2dce88"],
  legend: {
    show: false,
  },
  stroke: {
    curve: "smooth",
  },
};

const SalesSummary = ({ data, type, labels, options }: SalesSummaryProps) => {
  return (
    <>
      <Chart
        series={data}
        type={type as any}
        height={300}
        options={Object.assign({}, defaultOptions, options, { labels })}
      ></Chart>
    </>
  );
};

export default SalesSummary;
