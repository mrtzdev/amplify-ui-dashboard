import React from "react";
import Chart from "react-apexcharts";

interface TrafficSourcesProps {
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
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: "75%",
      },
      offsetY: 0,
    },
    stroke: {
      colors: undefined,
    },
  },
  colors: ["#5f71e4", "#2dce88", "#fa6340", "#f5365d", "#13cdef"],
  legend: {
    position: "bottom",
    offsetY: 0,
  },
};

const TrafficSources = ({
  data,
  type,
  labels,
  options,
}: TrafficSourcesProps) => {
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

export default TrafficSources;
