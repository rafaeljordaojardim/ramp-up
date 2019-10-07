import forecast from '../../clients/wheather/forecast';
import geocode from '../../clients/wheather/geocode';

class RepositoryWeather {
    constructor() {
        
    }
    getWeather = async (address:string) => {
        const geo = await geocode(address);
        if(!geo.data){
            throw new Error(geo.error)
        }
        const fore = await forecast(geo.data.latitude, geo.data.longitude);
        return fore;
    }
}
export default RepositoryWeather;