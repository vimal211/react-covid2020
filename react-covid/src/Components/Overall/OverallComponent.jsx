import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import "./Overall.css";

function OverallComponent() {
  let date = new Date();
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [data] = useContext(DataContext);
  let totalTested = data
    .map((ele) => ele.tested)
    .reduce((a, b) => a + b)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="overall">
      <div className="left">
        <h3>India</h3>
        <p>
          Last updated on {date.getDate()} {month[date.getMonth()]},{" "}
          {date.getFullYear()}
        </p>
      </div>
      <div className="right">
        <p>Tested</p>
        <h3>{totalTested}</h3>
        <p>
          As of {month[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
        </p>
        <p>per source</p>
      </div>
    </div>
  );
}

export default OverallComponent;
