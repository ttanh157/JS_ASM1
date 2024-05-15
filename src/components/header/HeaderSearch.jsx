import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../header/Header.css"; // Giữ nguyên nếu bạn có các styles riêng

export default function HeaderSearch() {
  const [destination, setDestination] = useState("");
  const [showDateRangePicker, setShowDateRangePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const buttonHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    location.replace("/search");
  };
  const handleDateRangeSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setShowDateRangePicker(false);
  };

  return (
    <div className="headerSearch">
      <div className="container bg-light">
        <div className="row border border-warning">
          <div className="col-12 col-md-3 border border-warning p-2 border-2">
            <span className={`fa-solid fa-bed text-blue me-2`} />
            <input
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              className="border-0 w-100"
            />
          </div>

          <div className="col-12 col-md-4 border border-warning p-2 border-2 position-relative">
            <span className={`fa-solid fa-calendar text-blue me-2`} />
            <input
              type="text"
              readOnly
              value={`${dateRange[0].startDate.toDateString()} - ${dateRange[0].endDate.toDateString()}`}
              className="border-0 w-100"
              onClick={() => setShowDateRangePicker(!showDateRangePicker)}
            />
            {showDateRangePicker && (
              <div style={{ position: "absolute", top: "100%", zIndex: 999 }}>
                <DateRangePicker
                  onChange={handleDateRangeSelect}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={dateRange}
                  direction="horizontal"
                  preventSnapRefocus={true}
                  calendarFocus="backwards"
                />
              </div>
            )}
          </div>

          <div className="col-12 col-md-4 border border-warning p-2 border-2">
            <span className={`fa-solid fa-user text-blue me-2`} />
            <input
              type="text"
              placeholder="Number of guests"
              className="border-0 w-100"
            />
          </div>

          <div className="col-12 col-md-1 p-2">
            <button className="btn btn-primary w-100" onClick={buttonHandler}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
