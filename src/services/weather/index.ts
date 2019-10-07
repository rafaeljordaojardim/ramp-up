import RepositoryWeather from '../../repository/weather/index';

class ServiceWeather {
    repositoryWeather:RepositoryWeather;
    constructor() {
        this.repositoryWeather = new RepositoryWeather();
    }
    getWeather = async (address:string) => { 
        const response = await this.repositoryWeather.getWeather(address);
        // console.log(response);
        return response;
    }   
}
export default ServiceWeather;