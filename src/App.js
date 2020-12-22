import React, {useState} from 'react';
import {fetchWeather} from "./api/fetchWeather";

import "./App.css"

function App() {

    const [query,setQuery] = useState('');
    const [weather,setWeather] = useState({});

    const changeHandler = (event) =>{
        setQuery(event.target.value)
    }

    const handleClick = async () => {
        const data = await fetchWeather(query);
console.log("Hello")
        setWeather(data);
        setQuery('');
    }

  return (
      <div className="app">
          <input type="text"className="location"placeholder="Enter Location..."value={query} onChange={changeHandler}/>
           <button onClick={handleClick}>Get Weather</button>
          {weather.main && (
              <div className="city">
                  <h2 className="city-name">
                      <span>{weather.name}</span>
                      <sup>{weather.sys.country}</sup>
                  </h2>
                  <div className="city-temp">
                      {Math.round(weather.main.temp)}
                      <sup>&deg;C</sup>
                  </div>
                  <div className="info">
                      <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                      <p>{weather.weather[0].description}</p>
                  </div>
              </div>
          )}
      </div>
  );
}

export default App;
