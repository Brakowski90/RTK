// //app/components/WeatherDetails
'use client'
import React from "react";
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

export const WeatherSparkLine = ({ data, color }) => {
  return (
    <Sparklines data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
  );
};

const WeatherSummary = () => {
  const { locations } = useSelector((state) => state.weather);

  const createWeather = () => {
    return locations.map((location) => {
      const { city, list } = location;

      return (
        <tr key={city.id} className="row">
          <td className="city-name col-md-3">{city.name}</td>
          <td className="col-md-3">
            <WeatherSparkLine data={list.map(item => item.main.temp)} color="green" />
            <p>{Math.round(list[0].main.temp)}°</p>
          </td>
          <td className="col-md-3">
            <WeatherSparkLine data={list.map(item => item.main.pressure)} color="orange" />
            <p>{list[0].main.pressure}</p>
          </td>
          <td className="col-md-3">
            <WeatherSparkLine data={list.map(item => item.main.humidity)} color="blue" />
            <p>{list[0].main.humidity} %</p>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="row">
      <tbody>{createWeather()}</tbody>
    </table>
  );
};

export default WeatherSummary;