import React from "react";
import "../header/Header.css";
import HeaderSearch from "../header/HeaderSearch";

export default function Header() {
  const NavbarTop = () => {
    return (
      <nav className="container-fluid backgroundNav row">
        <div className="col-12 col-md-9 align-self-center d-flex navbarBooking pt-3">
          <h5 className="text-white" style={{ fontWeight: "bold" }}>
            Web Booking
          </h5>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <button className="btn btn-light textBlue m-2">Login</button>
          <button className="btn btn-light textBlue m-2">Registered</button>
        </div>
      </nav>
    );
  };

  const Navbarlist = () => {
    const listMenu = [
      {
        type: "Stays",
        icon: "fa-bed",
        active: true,
      },
      {
        type: "Flights",
        icon: "fa-plane",
        active: false,
      },
      {
        type: "Car rentals",
        icon: "fa-car",
        active: false,
      },
      {
        type: "Attractions",
        icon: "fa-bed",
        active: false,
      },
      {
        type: "Airport taxis",
        icon: "fa-taxi",
        active: false,
      },
    ];
    return (
      <ul className="navbar-nav">
        {listMenu.map(function (item, index) {
          return (
            <li key={index} className="mb-2">
              <a
                href="#"
                className={`nav-item p-2 me-5 text-decoration-none ${
                  item.active === true ? "border rounded-pill" : ""
                }`}
              >
                <span className={`fa-solid ${item.icon} text-white me-2`} />
                <span className="text-white">{item.type}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <>
      <div className="container-fluid backgroundNav headerDiv">
        <header className="container backgroundNav">
          <NavbarTop />
          {/* Thanh menu */}
          <nav className="navbar navbar-expand-md backgroundNav">
            <div className="container-fluid ps-0">
              <a className="navBarHidden navbar-brand text-white" href="#">
                Menu
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse mb-2 mt-2"
                id="navbarNav"
              >
                {/* RenderList */}
                <Navbarlist />
              </div>
            </div>
          </nav>
          <div className="header">
            <h1>Find your next stay</h1>
            <p>Search deals on hotels, homes, and much more...</p>
            <button className="btn bg-info text-white">
              <a href="#" className="text-white decoration-none">
                Sign in / Register
              </a>
            </button>
          </div>
        </header>
      </div>
      <HeaderSearch />
    </>
  );
}
