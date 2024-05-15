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
  const testHandler = (event) => {
    console.log(event);
  };

  return (
    <div className="container homepage">
      <div className="row justify-content-center ">
        {/* Card */}
        {cardList.map((card) => (
          <div className="col-12 col-md-4 mt-3 mb-3 ">
            <div className="d-flex justify-content-center">
              <div className="cardHomepage">
                <a
                  href="#"
                  onClick={() => {
                    testHandler(card.name);
                  }}
                >
                  <img src={card.image} alt={card.image} />
                </a>

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
