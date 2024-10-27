import { useState, useEffect } from "react";

function Searchbar({ value, handleChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for Countries"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export { Searchbar };
