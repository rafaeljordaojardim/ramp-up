import forecast from '../../clients/wheather/darksky/forecast';
import geocode from '../../clients/wheather/mapbox/geocode';
import Forecast from '../../models/interfaces/forecast';
import ErrorHandling from '../../errorHandling/error';
import { STATUS_CODES } from 'http';

class RepositoryWeather {
    constructor() {
        
    }
    // public async getWeather(address:string):Promise<Forecast> {
    //     try {
    //         const geo = await geocode(address);
    //         const fore = await forecast(geo.latitude, geo.longitude);
    //         return {...fore, location:geo.location};
    //     } catch (error) {
    //         throw Error(error);
    //     }
    // }

    public async getWeather(address:string, count = 1){
        try {
            let geo = await geocode(address);
            if(geo){
                const fore = await forecast(geo.latitude, geo.longitude);
                return {...fore, location:geo.location};
            }
        } catch (error) {
            if(count <= 3){
                setTimeout(() => {
                    console.log('Passando no this.getWeather', count);
                    return this.getWeather(address, count=count+1);
                }, 3000*count);
            }else{
                 throw new ErrorHandling(error.message, 404);
            }
        }
    }//getWeather
      
}
export default RepositoryWeather;