import React from "react";
import "./Productstyle.css";

export default function Filter() {
  return (
    <div className="filters">
      <span className="title">
        <h3>Filter Products</h3>
      </span>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Price in Ascending
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Price in Decending
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Fast Delivery
        </label>
      </div>
      <button className="btn btn-secondary">Clear Filter</button>
    </div>
  );
}
