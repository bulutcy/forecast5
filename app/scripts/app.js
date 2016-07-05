import './fonts'
import {getForecast} from './services/ForecastService.js'
import {render, renderError} from './services/RenderService.js'

getForecast().then((forecast)=>{
  render('forecast.html', forecast)
},renderError);

