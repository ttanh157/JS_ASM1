import React from "react";
import "./HotelList.css";
import axios from "axios";
import { useState, useEffect } from "react";

const HotelList = () => {
  //   Lấy dữ liệu từ File JSON
  const hotelList = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  return (
    <>
      <div className="container">
        {/* Title  */}
        <div>
          <h3>Home Guests Love</h3>
        </div>
        {/* Card  */}
        <div>
          <div className="row justify-content-around">
            {hotelList.map((item, index) => {
              return (
                <div key={index} className="cardHotel col-md-3 col-12">
                  <img src={item.image_url} alt="hotel_1" />
                  <a href="/detail">
                    <h5>{item.name}</h5>
                  </a>
                  <p>{item.city}</p>
                  <b> Starting from ${item.price}</b>
                  <div className="d-flex mb-3">
                    <span className="pd">{item.rate} </span>
                    <span>{item.type}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default HotelList;
