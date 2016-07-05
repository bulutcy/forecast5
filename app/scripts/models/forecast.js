const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export  class Forecast {
    constructor(obj) {

        this.cityName = obj.city.name;
        this.list = [];

        obj.list.slice(0,5).forEach((item)=> {
            let dt = new Date(item.dt * 1000)
            this.list.push({
                dayName: days[dt.getDay()],
                minTemp: Math.round(item.temp.min),
                maxTemp: Math.round(item.temp.max),
                weather: item.weather[0]
            })
        })

    }
}
