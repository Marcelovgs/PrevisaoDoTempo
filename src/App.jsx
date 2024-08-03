import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/Weatherinformations'


function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()

  async function searchCity() {
    console.log(inputRef.current.value);
    const city = inputRef.current.value
    const key = "f845468909187420adbfd479be072dad"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)


  }

  return (
    <div className='container'>
      <h1>DevClub Previsão do tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}

    </div>
  );
}

export default App
