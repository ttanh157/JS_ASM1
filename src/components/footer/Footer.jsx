import React from "react";
import "./Footer.css";
const Footer = function () {
  const footerList = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          {footerList.map((item, index) => {
            return (
              <>
                <div key={index} className="footerList col-md-2 col-6 ">
                  {item.col_values.map((i, id) => {
                    return (
                      <a href="#" key={id}>
                        {i}
                      </a>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Footer;
