import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div classname="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Harare</h1>
      <ul>
        <li>Thursday 13:00</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Sunny"
            />
            <div className="float-left">
              <span className="temperature">31</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 16%</li>
            <li>Wind: 8km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
