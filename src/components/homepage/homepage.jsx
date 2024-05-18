import React from "react";
import "./homepage.css";
import CityList from "./CityList";
import TypeList from "./TypeList";
import HotelList from "./HotelList";
import FormRes from "./formRes";

export default function Homepage() {
  return (
    <div className="container">
      <CityList />
      <TypeList />
      <HotelList />
      <FormRes />
    </div>
  );
}
