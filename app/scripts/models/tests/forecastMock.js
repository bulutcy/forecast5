let forecastApiResponse = {
    'city': {
        'id': 2643743,
        'name': 'London',
        'coord': {'lon': -0.12574, 'lat': 51.50853},
        'country': 'GB',
        'population': 0
    },
    'cod': '200',
    'message': 0.0085,
    'cnt': 7,
    'list': [{
        'dt': 1467720000,
        'temp': {'day': 20.01, 'min': 12.65, 'max': 20.01, 'night': 12.65, 'eve': 20.01, 'morn': 20.01},
        'pressure': 1024.41,
        'humidity': 69,
        'weather': [{'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03d'}],
        'speed': 6.78,
        'deg': 307,
        'clouds': 32
    }, {
        'dt': 1467806400,
        'temp': {'day': 16.42, 'min': 12.05, 'max': 20.48, 'night': 16.1, 'eve': 20.38, 'morn': 12.05},
        'pressure': 1030.64,
        'humidity': 86,
        'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02d'}],
        'speed': 2.56,
        'deg': 319,
        'clouds': 20
    }, {
        'dt': 1467892800,
        'temp': {'day': 19.05, 'min': 14.72, 'max': 19.32, 'night': 14.95, 'eve': 19.27, 'morn': 14.72},
        'pressure': 1025.24,
        'humidity': 74,
        'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
        'speed': 0,
        'deg': 0,
        'clouds': 88
    }, {
        'dt': 1467979200,
        'temp': {'day': 18.77, 'min': 13.93, 'max': 19, 'night': 16.45, 'eve': 19, 'morn': 13.93},
        'pressure': 1023.83,
        'humidity': 0,
        'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d'}],
        'speed': 5.72,
        'deg': 249,
        'clouds': 92
    }, {
        'dt': 1468065600,
        'temp': {'day': 24.33, 'min': 15.95, 'max': 24.33, 'night': 18.98, 'eve': 24, 'morn': 15.95},
        'pressure': 1023.45,
        'humidity': 80,
        'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
        'speed': 5.31,
        'deg': 211,
        'clouds': 0
    }, {
        'dt': 1468152000,
        'temp': {'day': 21.23, 'min': 16.25, 'max': 21.23, 'night': 16.25, 'eve': 20.91, 'morn': 17.05},
        'pressure': 1012.57,
        'humidity': 0,
        'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
        'speed': 9.01,
        'deg': 237,
        'clouds': 48,
        'rain': 1.55
    }, {
        'dt': 1468238400,
        'temp': {'day': 20.4, 'min': 14.87, 'max': 21.36, 'night': 14.87, 'eve': 21.36, 'morn': 15.3},
        'pressure': 1018.62,
        'humidity': 0,
        'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
        'speed': 1.94,
        'deg': 172,
        'clouds': 27
    }]
}

let forecastExpectation = {
    'cityName': 'London',
    'list': [{
        'dayName': 'Tuesday',
        'minTemp': 13,
        'maxTemp': 20,
        'weather': {'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03d'}
    }, {
        'dayName': 'Wednesday',
        'minTemp': 12,
        'maxTemp': 20,
        'weather': {'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02d'}
    }, {
        'dayName': 'Thursday',
        'minTemp': 15,
        'maxTemp': 19,
        'weather': {'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}
    }, {
        'dayName': 'Friday',
        'minTemp': 14,
        'maxTemp': 19,
        'weather': {'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d'}
    }, {
        'dayName': 'Saturday',
        'minTemp': 16,
        'maxTemp': 24,
        'weather': {'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}
    }]
}

export { forecastApiResponse, forecastExpectation}
