import { useState } from "react";



export const AppWeather = () => {
    const urlBase = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "197d84c1a96ba093366f89440e61d5b1";

    const [city, setCity] = useState("");
    const [weatherResponse, setWeatherResponse] = useState("");

    const handleCityChange = (e) => {
        setCity(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(city.length > 0) getFetch();
    };

    const getFetch = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);
            const data = await response.json();
            setWeatherResponse(data);
        } catch (error) {
            console.log(error)
        }

    };
    return (
        <>
            <div className="container">
                <h1>Aplicación del Clima</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" value={city} onChange={handleCityChange} />
                    <button type="submit">Consultar</button>
                </form>
            </div>

            {
                weatherResponse && (
                    <div>
                        <h2>{weatherResponse.name}</h2>
                        <p>Temperatura actual: {parseFloat(weatherResponse.main.temp - 273.15).toFixed(2)}°C</p>
                        <p>Información adicional: {weatherResponse.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`} alt="" />
                    </div>
                )
            }

        </>
    )
}
