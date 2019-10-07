import ServiceWeather from '../../../services/weather'

class ControllerWeather {
    serviceWeather: ServiceWeather;
    constructor() {
        this.serviceWeather = new ServiceWeather();
    }
    getWeather = async (req, res) => {
        try {
            const address = req.body.address;
            if (!address) {
                return res.status(400).send('Put the city');
            }
            const response = await this.serviceWeather.getWeather(address);
            // console.log(response);
            return res.send(response.data);
        } catch (error) {
            return res.json(error);
        }
    }
}
export default ControllerWeather;