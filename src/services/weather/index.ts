import RepositoryWeather from '../../repository/weather/index';
import Forecast from '../../models/interfaces/forecast';

class ServiceWeather {
    repositoryWeather:RepositoryWeather;
     constructor() {
        this.repositoryWeather = new RepositoryWeather();
    }
    public getWeather = async (address:string):Promise<Forecast> => { 
        try {
            const response = await this.repositoryWeather.getWeather(address);
            // console.log(response);
            return response;
        } catch (error) {
            throw error;
        }
    }   
}
export default ServiceWeather;