import forecast from '../../clients/wheather/darksky/forecast';
import geocode from '../../clients/wheather/mapbox/geocode';
import Forecast from '../../models/interfaces/forecast';

class RepositoryWeather {
    constructor() {
        
    }
    public async getWeather(address:string):Promise<Forecast> {
        const geo = await geocode(address);
        if(!geo){
            throw new Error('Geocode not set')
        }
        const fore = await forecast(geo.latitude, geo.longitude);
        return fore;
    }
}
export default RepositoryWeather;