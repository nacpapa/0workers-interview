import { useState } from "react";
import "./App.css";
import CheckboxInput from "./components/Checkbox/Checkbox";
import { countriesData } from "./data/countries";
import { Country } from "./models /Country";

function App() {
  const [countries, setCountries] = useState<Country[]>(countriesData);
  const [allCountriesChecked, setAllCountriesChecked] = useState(false);

  const onCheckboxSelect = (id: number | null) => {
    setCountries((prevCountries) => {
      let areAllChecked = true;
      const updatedCountries = prevCountries.map((country) => {
        if (id === null) {
          return { ...country, isChecked: !allCountriesChecked };
        } else if (country.id === id) {
          const updatedCountry = { ...country, isChecked: !country.isChecked };
          areAllChecked = areAllChecked && updatedCountry.isChecked;
          return updatedCountry;
        } else {
          areAllChecked = areAllChecked && country.isChecked;
          return country;
        }
      });

      if (id !== null) {
        areAllChecked = updatedCountries.every((country) => country.isChecked);
      } else {
        areAllChecked = !allCountriesChecked;
      }

      setAllCountriesChecked(areAllChecked);

      return updatedCountries;
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-input-container">
          <CheckboxInput
            label="Select All"
            checked={allCountriesChecked}
            onChange={() => onCheckboxSelect(null)}
          />
          {countries.map((country) => (
            <CheckboxInput
              key={country.id}
              label={country.name}
              checked={country.isChecked}
              onChange={() => onCheckboxSelect(country.id)}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
