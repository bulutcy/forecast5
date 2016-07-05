import axios from 'axios'
import { config } from '../config'
import { Forecast }  from '../models/forecast'

function getForecast() {
    return new Promise((resolve, reject) => {
        axios.get(config.getForecastUrl('london,uk'))
            .then(function (response) {
                resolve(new Forecast(response.data))
            })
            .catch(function (error) {
                reject(error)
            })
    })

}
export { getForecast }
