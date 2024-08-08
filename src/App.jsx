import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import WeatherInformations from './components/WeatherInformations/Weatherinformations';
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days';

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();

  const inputRef = useRef();

  async function searchCity() {
    console.log(inputRef.current.value);
    const city = inputRef.current.value;
    const key = "f845468909187420adbfd479be072dad";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Days);

    setWeather5Days(apiInfo5Days.data);
    setWeather(apiInfo.data);
  }

  return (
    <div className='container'>
      <h1>Previsão do tempo</h1>
      <div className="input-button-wrapper">
        <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
        <button className='weather-button' onClick={searchCity}>
          <span>Buscar</span>
        </button>
      </div>

      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
