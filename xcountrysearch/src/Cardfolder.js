import React, { Component } from "react";
import { useState, useEffect } from "react";
// import "./Card.css";

function Card({ countries }) {
  return (
    <div className="results">
      {countries.length > 0 ? (
        countries.map((country) => (
          <div key={country.cca3} className="Container">
            <img
              src={country.flags?.svg}
              alt={`Flag of ${country.name.common}`}
              style={{ width: "150px", height: "200px", marginRight: "10px" }}
            />
            <div>{country.name.common}</div>
          </div>
        ))
      ) : (
        <p>No countries found</p>
      )}
    </div>
  );
}

export default Card;
