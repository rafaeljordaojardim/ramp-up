import forecast from '../../clients/wheather/darksky/forecast';
import geocode from '../../clients/wheather/mapbox/geocode';
import Forecast from '../../models/interfaces/forecast';
import ErrorHandling from '../../errorHandling/error';
import { STATUS_CODES } from 'http';

class RepositoryWeather {
    constructor() {
        
    }
    public async getWeather(address:string):Promise<Forecast> {
        let geo;
        let count = 0;
        while(!geo || count<=3){
            geo = await geocode(address);
            console.log('try ' + count);
            count++;
        }
        if(!geo){
            throw new ErrorHandling(STATUS_CODES[404], 404);
        }
        count = 0;
        let fore;
        while(!fore || count <=3){
            fore = await forecast(geo.latitude, geo.longitude);
            console.log('try ' + count);
            count++;
            
        }
        if(!fore){
            throw new ErrorHandling(STATUS_CODES[404], 404);
        }
        return {...fore, location:geo.location};
    }

    private async getToTryGetTheAwnser(){

    }
}
export default RepositoryWeather;