//app/components/CityForm
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../store/slices/citySlice";
//import { setDefaultCity } from "../store/slices/defaultCitySlice";

export const LocationForm = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [showWeatherData, setShowWeatherData] = useState(false);
  const [showSetDefaultButton, setShowSetDefaultButton] = useState(false);

  const submitLocationForm = (event) => {
    event.preventDefault();
    dispatch(fetchWeather(location));
    setShowWeatherData(true);
    setShowSetDefaultButton(true); // Show the button after submitting location
    setLocation("");
    console.log("Get Weather button clicked!");
  };

  const handleSetDefault = () => {
    console.log("Set city default clicked");
  };

  return (
    <div>
      <h1 className="mt-3 text-center">Weather App</h1>
      <form className="mt-3 row g-1 offset-4" onSubmit={submitLocationForm}>
        <div className="col-5">
          <input
            className="form-control col-1"
            type="text"
            required
            value={location}
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary me-2" type="submit">
            Get Weather
          </button>
          {showSetDefaultButton && (
            <button className="btn btn-secondary" onClick={handleSetDefault}>
              Set City Default
            </button>
          )}
        </div>
      </form>
      <br />
      {showWeatherData && (
        <div className="row text-black">
          <div className="col-md-3">City</div>
          <div className="col-md-3">Temperature (°F)</div>
          <div className="col-md-3">Pressure (hPa)</div>
          <div className="col-md-3">Humidity (%)</div>
        </div>
      )}
    </div>
  );
};