import axios from 'axios';
import Forecast from '../../../models/interfaces/forecast';
const forecast = async (latitude:number, longitude:number): Promise<Forecast> => {
        const url = `https://api.darksky.net/forecast/3ac0493ee917a88450e9bd57b5cd44af/${latitude}, ${longitude}`;
        const response = await axios.get(url);
        const data = response.data.currently;
        return {temperature:data.temperature, precipProbability:data.precipProbability, summary:data.summary};
}//
export default forecast;