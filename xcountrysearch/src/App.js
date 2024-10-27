import Card from "./Cardfolder";
import { Searchbar } from "./Serachbar";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countryList, setCountryList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountryList(data);
        setFilteredCountries(data); // Display all countries initially
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }
    fetchCountries();
  }, []);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    const filtered = countryList.filter((country) =>
      country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCountries(filtered);
  };
  return (
    <div className="App">
      <h1>Country Flags and Names</h1>
      <Searchbar value={value} handleChange={handleChange} />
      <Card countries={filteredCountries} />
    </div>
  );
}

export default App;
