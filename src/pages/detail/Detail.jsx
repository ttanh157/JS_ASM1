import React from "react";
import Header from "../../components/header/Header";

import Footer from "../../components/footer/Footer";

const Detail = () => {
  const detailList = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };
  return (
    <div>
      <Header />
      <div className="container mt-5 mb-5">
        <div className="row mt-5">
          {/* Top*/}
          <div className="col-md-8 col-12 mt-5">
            <h1 className="fs-3">{detailList.name}</h1>
            <div className="d-flex align-items-center">
              {" "}
              <span className="fas fa-map-marker-alt me-1"> </span>
              <p className="m-0">{detailList.address}</p>
            </div>

            <p className="fs-5  text-primary m-0">{detailList.distance}</p>
            <p className="fs-5  text-success m-0">{detailList.price}</p>
          </div>
          <div className="col-md-4 col-12 mt-5 d-flex justify-content-end align-items-start">
            <button className="me-3 btn btn-primary fw-bold ">
              Reserve or Book Now!{" "}
            </button>
          </div>
        </div>
        {/* Image  */}
        <div className="row mt-5 justify-content-around">
          {detailList.photos.map((item, index) => {
            return (
              <>
                <div className="col-md-4 col-6 mt-3 ">
                  <img src={item} alt={item.photos} className="w-100"></img>
                </div>
              </>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="row mt-3">
          <div className="col-md-8 mt-3">
            <h3 className="fw-bold mb-5">{detailList.title}</h3>
            <p>{detailList.description}</p>
          </div>
          <div className="col-md-4 mt-3">
            <div className="bg-primary-subtle p-3">
              <h3 className="fs-4 fw-bold text-secondary">
                Perfect for a 9-night stay
              </h3>
              <p>
                Located in the real heart of Krakow, this property has exellent
                location score of 9.8{" "}
              </p>
              <div className="d-flex justify-content-start align-items-center">
                <span className="fw-bold fs-4 me-1 mb-0">
                  {" "}
                  ${detailList.nine_night_price}
                </span>
                <span className="fs-4 text-secondary"> (9 nights) </span>
              </div>
              <button className="btn btn-primary mt-3">
                {" "}
                Reserve or Book Now{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
