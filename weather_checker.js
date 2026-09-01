function getWeather() {

    let city = document.getElementById("city").value;

    let weatherData = {
        kolkata: {
            temp: 32,
            condition: "Sunny ",
            humidity: 70,
            wind: 12
        },

        delhi: {
            temp: 35,
            condition: "Clear Sky ",
            humidity: 55,
            wind: 10
        },

        mumbai: {
            temp: 29,
            condition: "Cloudy ",
            humidity: 80,
            wind: 15
        },

        london: {
            temp: 18,
            condition: "Rainy ",
            humidity: 75,
            wind: 20
        },

        newyork: {
            temp: 24,
            condition: "Cloudy ",
            humidity: 65,
            wind: 14
        }
    };

    city = city.toLowerCase().replace(" ", "");

    if (weatherData[city]) {

        let data = weatherData[city];

        document.getElementById("weather").innerHTML = `
            <h2>${city.toUpperCase()}</h2>

            <div class="temperature">
                ${data.temp}°C
            </div>

            <p>${data.condition}</p>

            <div class="details">
                <p> ${data.humidity}%<br>Humidity</p>
                <p> ${data.wind} km/h<br>Wind</p>
            </div>
        `;

    } else {

        document.getElementById("weather").innerHTML = `
            <p>Weather data not available</p>
            <p>Try Kolkata, Delhi, Mumbai, London or New York.</p>
        `;
    }
}
