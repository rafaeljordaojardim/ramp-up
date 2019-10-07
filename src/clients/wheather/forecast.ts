import request from 'request';
import axios from 'axios';
const forecast = async (latitude:number, longitude:number) => {
    if(!latitude || !longitude) return {error:'Informe a latitude e a longitude', data: undefined}
    else {
        const url = `https://api.darksky.net/forecast/3ac0493ee917a88450e9bd57b5cd44af/${latitude},${longitude}`;
        const response = await axios.get(url);
        const {temperature, precipProbability, summary} = response.data.currently;
        return {error:'Error', data:{temperature, precipProbability, summary}};
    }//else
}

export default forecast;