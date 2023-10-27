import React, { useState } from 'react';
import './App.css';
import CitySearch from './CitySearch';


function App() {
  const [airQualityData, setAirQualityData] = useState(null)
  const [error, setError] = useState(null)

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_TOKEN}`)
      const data = await response.json()
      console.log(data)
      if (response.ok && data.status === 'ok') {
        setAirQualityData(data.data)
        setError(null)
      } else {
        setError("The location you have entered could not be found. Please verify correct spelling or enter another city.")
        setAirQualityData(null)
      }
    } catch (error) {
      console.error("API error:", error)
      setError('Sorry, something went wrong')
      setAirQualityData(null)
    }
  }
  return (
    <div>
      <h1>Air Quality Index Checker</h1>
      <CitySearch getAirQuality={getAirQuality} />
    </div>
  );
}

export default App;
