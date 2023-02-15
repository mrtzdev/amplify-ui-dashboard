import React from "react";
import { Card } from "@aws-amplify/ui-react";

interface MiniStatisticProps {
  title: string;
  amount: string;
  icon?: JSX.Element;
  percentage?: number;
}

const MiniStatistics = (props: MiniStatisticProps) => {
  return (
    <Card height="100%" borderRadius="15px" className="bg-gradient-red">
      <div className="card-content">
        <div className="card-title"> {props.title} </div>
        <div className="card-statistics-amount">{props.amount}</div>
        <div className="card-statistics-icon">{props.icon}</div>
      </div>
    </Card>
  );
};

export default MiniStatistics;
