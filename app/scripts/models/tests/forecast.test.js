import { Forecast }  from '../forecast'
import   { forecastApiResponse, forecastExpectation}  from './forecastMock'
describe('Forecast model', function () {


    it('Should create proper forecast model', () => {
        expect(JSON.stringify(new Forecast(forecastApiResponse))).toEqual(JSON.stringify(forecastExpectation))
    })


})
