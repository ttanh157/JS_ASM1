import React from "react";
import "./CityList.css";

export default function Homepage() {
  const cardList = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];

  return (
    <div className="container homepage">
      <div className="row justify-content-center ">
        {/* Card */}
        {cardList.map((card, index) => (
          <div key={index} className="col-12 col-md-4 mt-3 mb-3 ">
            <div className="d-flex justify-content-center">
              <div className="cardHomepage">
                <img src={card.image} alt={card.image} />
                <div className="cardTitle">
                  <h5 className="card-title">{card.name}</h5>
                  <p className="card-text">{`${card.subText}`}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Card */}
      </div>
    </div>
  );
}
