import React from "react";

const AirQualityCard = ({ data }) => {
  const { aqi, city, dominentpol, time, iaqi } = data
  return (
    <div>
      <h5>{city.name}</h5>
      <h6>Air Quality Index: {aqi}</h6>
      <p>Dominant Pollutant: {dominentpol}</p>
      <p>Temperature: {iaqi.t.v} °C</p>
      <p>Last Updated: {time.s}</p>
    </div>
  )
}

export default AirQualityCard;