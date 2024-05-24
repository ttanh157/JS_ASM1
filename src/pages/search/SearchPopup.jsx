import React from "react";
import Style from "./SearchPopup.module.css";
export default function SearchPopup() {
  return (
    <>
      <div className={`${Style.container}`}>
        <h3>Search</h3>
        <form action="post" className=" d-flex flex-column">
          <label htmlFor="text">Destination</label>
          <input type="text" name="destination" placeholder="" />
          <label htmlFor="text">Check-in Date</label>
          <input type="text" name="destination" placeholder="" />
          <label htmlFor="text">Option</label>
          <div className={`row justify-content-between ${Style.option}`}>
            <div className="col-md-8 mt-3">
              <label htmlFor="text">Min Price Per Night</label>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
              <input
                type="text"
                name="destination"
                className={Style.optionInput}
              />
            </div>
            <div className="col-md-8 mt-3">
              <label htmlFor="text">Max Price Per Night</label>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
              <input
                type="text"
                name="destination"
                className={Style.optionInput}
              />
            </div>
            <div className="col-md-8 mt-3">
              <label htmlFor="text">Adult</label>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
              <input
                type="text"
                name="destination"
                className={Style.optionInput}
              />
            </div>
            <div className="col-md-8 mt-3">
              <label htmlFor="text">Children</label>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
              <input
                type="text"
                name="destination"
                className={Style.optionInput}
              />
            </div>
            <div className="col-md-8 mt-3">
              <label htmlFor="text">Room</label>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
              <input
                type="text"
                name="destination"
                className={Style.optionInput}
              />
            </div>
          </div>
          <button className="mt-3 btn btn-primary text-white mb-1 ms-2 me-2">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
