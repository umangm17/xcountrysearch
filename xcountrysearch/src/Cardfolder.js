import React, { Component } from "react";
import { useState, useEffect } from "react";
import "./Card.css";

function Card({ countries }) {
  return (
    <div className="Container">
      {countries.length > 0 ? (
        countries.map((country) => (
          <div key={country.cca3} className="Countrycard">
            <img
              src={country.flags?.svg}
              alt={`Flag of ${country.name.common}`}
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
