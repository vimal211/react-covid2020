import React from "react";
import OverallComponent from "./Overall/OverallComponent";
import SearchComponent from "./Search/SearchComponent";
import StateComponent from "./State/StateComponent";
import "./Home.css";

function HomeComponent() {
  return (
    <div className="Home">
      <OverallComponent />
      <SearchComponent />
      <StateComponent />
    </div>
  );
}

export default HomeComponent;
