import "./TypeList.css";
import React from "react";

export default function TypeList() {
  const data = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  const renderCards = data.map((type, index) => (
    <div
      key={index}
      className="col-6 col-md-4 col-lg-2 cardTypeFlex bg-light mb-3"
    >
      <img src={type.image} alt={type.name} className="cardTypeImg" />
      <div className="cardTypeTitle">
        <h5 className="card-title">{type.name}</h5>
        <p className="card-text">{type.count} properties</p>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <h3>Browse by property type</h3>
      <div className="container row justify-content-around">
        {/* Card */}
        {renderCards}
        {/* Card */}
      </div>
    </div>
  );
}
