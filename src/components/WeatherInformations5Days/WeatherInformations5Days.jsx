import './WeatherInformations5Days.css';

function WeatherInformations5Days({ weather5Days }) {
    console.log(weather5Days);

    let dailyForecast = {};

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if (!dailyForecast[date]) {
            dailyForecast[date] = {
                minTemp: forecast.main.temp_min,
                maxTemp: forecast.main.temp_max,
                weather: forecast.weather[0],
                dt: forecast.dt
            };
        } else {
            dailyForecast[date].minTemp = Math.min(dailyForecast[date].minTemp, forecast.main.temp_min);
            dailyForecast[date].maxTemp = Math.max(dailyForecast[date].maxTemp, forecast.main.temp_max);
        }
    }

    const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

    function convertDate(date) {
        return new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' });
    }

    return (
        <div className="weather-container">
            <h3>Previsão Próximos 5 Dias</h3>
            <div className='weather-list'>
                {nextFiveDays.map(forecast => (
                    <div key={forecast.dt} className="weather-item">
                        <p>{convertDate(forecast)}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${forecast.weather.icon}.png`}
                            alt="weather icon"
                        />
                        <p>{forecast.weather.description}</p>
                        <p>{Math.round(forecast.minTemp)}°C min / {Math.round(forecast.maxTemp)}°C max</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherInformations5Days;
