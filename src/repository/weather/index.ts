import forecast from '../../clients/wheather/darksky/forecast';
import geocode from '../../clients/wheather/mapbox/geocode';
import Forecast from '../../models/interfaces/forecast';
import getWeatherGeneric from '../../utils/retryAPI';

class RepositoryWeather {
    constructor() {
        
    }
    public async getWeather(address:string):Promise<Forecast>{
        const geocodeFunc = geocode.bind(this, address);
        const resultGeocode =  await getWeatherGeneric(geocodeFunc);
        console.log(resultGeocode);
        const foreFunc = forecast.bind(this, resultGeocode.latitude, resultGeocode.longitude);
        const fore = await getWeatherGeneric(foreFunc);
       return {...fore, location:resultGeocode.location};
    }//getWeather
   
}
export default RepositoryWeather;




// function retry(fn, count = 0) {

//     try {
//         const response = fn();
//     } catch {

//         if (retires >= 3) {

//         }
//         console.log('deu zica');
//         retry(count++, addres, fn);

//     }
// }


// try {
//     const binded = bind(getWeather('google.com'));
//     await retry('google.com', binded);
// } catch {
//     console.error('Max retries reached');
// }


// public async getWeather(address:string):Promise<Forecast> {
    //     try {
    //         const geo = await geocode(address);
    //         const fore = await forecast(geo.latitude, geo.longitude);
    //         return {...fore, location:geo.location};
    //     } catch (error) {
    //         throw Error(error);
    //     }
    // }

    // public async getWeather2(address:string, count = 1):Promise<Forecast>{
    //     try {
    //         let geo = await geocode(address);
    //         if(geo){
    //             const fore = await forecast(geo.latitude, geo.longitude);
    //             return {...fore, location:geo.location};
    //         }
    //     } catch (error) {
    //         if(count <= 3){
    //             return new Promise((resolve, reject) => {
    //                 setTimeout(() => {
    //                     console.log('Try', count);
    //                     const response = this.getWeather2(address, ++count);
    //                     return resolve(response);
    //                 }, 3000*count);
    //             });
    //         }else{
    //              throw new ErrorHandling(error, 404);
    //         }
    //     }
    // }//getWeather








    // public async getWeatherGeneric(fn, count = 1){
    //     try {
    //         let response = await fn();
    //         return response;
    //     } catch (error) {
    //         if(count <= 3){
    //             return new Promise((resolve, reject) => {
    //                 setTimeout(() => {
    //                     console.log('Try ', count);
    //                     const funcToCall = this.getWeatherGeneric(fn, ++count);
    //                     return resolve(funcToCall);
    //                 }, 3000 * count)
    //             })
    //         }else{
    //             throw new ErrorHandling(error, 404);
    //         }
    //     }
    // }//getWeatherGeneric
