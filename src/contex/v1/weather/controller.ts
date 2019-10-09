import ServiceWeather from '../../../services/weather'
import Forecast from '../../../models/interfaces/forecast';

class ControllerWeather {
    serviceWeather: ServiceWeather;
    constructor() {
        this.serviceWeather = new ServiceWeather();
    }
    public async getWeather(req, res):Promise<Forecast> {
        try {
            const address = req.body.address;
            const response = await this.serviceWeather.getWeather(address);
            return res.send(response);
        } catch (error) {
            return res.json(error);
        }
    }
}
export default ControllerWeather;