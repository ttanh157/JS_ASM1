import React from "react";
import "./homepage.css";
import CityList from "./CityList";
import TypeList from "./TypeList";

export default function Homepage() {
  return (
    <div className="container">
      <CityList />
      <TypeList />
    </div>
  );
}
