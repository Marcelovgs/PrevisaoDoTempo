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
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' });

        return newDate;
    }

    let dailyForecast = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = {
                minTemp: forecast.main.temp_min,
                maxTemp: forecast.main.temp_max,
                weather: forecast.weather[0],
                dt: forecast.dt
            }
        } else {
            dailyForecast[date].minTemp = Math.min(dailyForecast[date].minTemp, forecast.main.temp_min)
            dailyForecast[date].maxTemp = Math.max(dailyForecast[date].maxTemp, forecast.main.temp_max)
        }
    }

    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

        return newDate
    }

    return (
        <div className='weather-container'>
<<<<<<< HEAD
            <h3>Previsão para os Próximos 5 dias</h3>
=======
            <h3>Previsão para os Proximos 5 dias.</h3>
>>>>>>> 49b0ac8 (Melhorando visualmente)
            <div className='weather-list'>
                {nextFiveDays.map(forecast => (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather.icon}.png`} alt={forecast.weather.description} />
                        <p className='forecast-description'>{forecast.weather.description}</p>
<<<<<<< HEAD
                        <p>{Math.round(forecast.minTemp)}ºC Min / {Math.round(forecast.maxTemp)}ºC Max</p>
=======
                        <p>{Math.round(forecast.minTemp)}ºC Min / {Math.round(forecast.maxTemp)} ºC Max</p>
>>>>>>> 49b0ac8 (Melhorando visualmente)
                    </div>
                ))}
            </div>
        </div>
<<<<<<< HEAD
    );
}

export default WeatherInformations5Days;
=======
    )
}

export default WeatherInformations5Days
>>>>>>> 49b0ac8 (Melhorando visualmente)
