import React from "react";
import Style from "./SearchList.module.css";

export default function SearchList() {
  const hotelList = [
    {
      name: "Tower Street Apartments",
      distance: "500m",
      tag: "Free airport taxi",
      type: "Entire studio • 1 bathroom • 21m² 1 full bed",
      description: "Studio Apartment with Air conditioning",
      free_cancel: true,
      price: 112,
      rate: 8.9,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      distance: "200m",
      tag: "Free Breakfast",
      type: "Entire studio • 2 bathroom • 100m² 2 full bed",
      description: "Studio Apartment",
      free_cancel: true,
      price: 140,
      rate: 9.3,
      rate_text: "Exceptional",
      image_url: "./images/hotel_search_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      distance: "100m",
      tag: "Free Parking",
      type: "1 bathroom • 51m² 2 full bed",
      description: "Hotel in Lisbon",
      free_cancel: false,
      price: 99,
      rate: 8.8,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_3.jpg",
    },
  ];

  return (
    <>
      <div className="container">
        <div>
          {/* Item 1 */}
          {hotelList.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`${Style.searchCardItem} ${Style.searchCard} row justify-content-between mb-3`}
                >
                  <div
                    className={`${Style.image} col-12 col-md-3 d-flex justify-content-start`}
                  >
                    <img src={item.image_url} alt={item.image_url} />
                  </div>

                  <div className="col-12 col-md-5 d-flex flex-column justify-content-start">
                    <h5 className="fs-5">{item.name}</h5>
                    <p className="fs-6 mb-0">{`${item.distance} from center`}</p>
                    <div className="d-flex">
                      <p className={`${Style.tag} fs-6`}>{`${item.tag}`}</p>
                    </div>
                    <p className="fs-6 mb-0 fw-bold">{`${item.description}`}</p>
                    <p className="fs-6 mb-0">{`${item.type}`}</p>
                    <p className="fs-6 mb-0 text-success fw-bold">{`${
                      item.free_cancel ? "Free cancellation" : ""
                    }`}</p>
                    <p className="fs-6 mb-0 text-success">{`${
                      item.free_cancel
                        ? "You can cancel later, so lock in this great price today!"
                        : ""
                    }`}</p>
                  </div>
                  <div className="col-12 col-md-3">
                    <div
                      className={`${Style.cardSearchList} d-flex flex-column align-items-start`}
                    >
                      <div
                        className={`${Style.reset} w-100 d-flex justify-content-between`}
                      >
                        <h1 className="fs-6 fw-bold">{item.rate_text}</h1>
                        <p className="fs-6 bg-primary text-white p-1 m-0">
                          {item.rate}
                        </p>
                      </div>
                      <div className="w-100 d-flex justify-content-end mt-auto">
                        <p className="fs-6 fw-bold mb-0">{item.price}$</p>{" "}
                      </div>
                      <p className="w-100 d-flex justify-content-end">
                        includes taxes and fees
                      </p>
                      <a href="#" className="ms-auto w-100 btn btn-primary">
                        See availability
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* Item 1 */}
        </div>
      </div>
    </>
  );
}
