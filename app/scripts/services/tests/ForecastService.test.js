
import  ForecastService from '../ForecastService';
import   { forecastApiResponse, forecastExpectation}  from '../../models/tests/forecastMock'
import  { getForecast} from '../ForecastService';

describe('Forecast Service', function() {

    beforeEach(() => {
        // mock backend
        ForecastService.__Rewire__('axios', {
            get: () =>  {
               return {
                   then : (cb)=> cb({ data : forecastApiResponse})
               }
            }
         });

    });

    it('Should get the forecast and create object', (done) => {
        getForecast().then((forecast)=>{
            expect(JSON.stringify(forecast)).toEqual(JSON.stringify(forecastExpectation));
            done()
        })
    });



});
