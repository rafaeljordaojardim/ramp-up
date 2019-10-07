import request from 'request';
import axios from 'axios';

const geocode = async (address:string) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicmphcmRpbSIsImEiOiJjazBnenBtdW4wZDMwM2NyNGt5bzRvbzVtIn0.kXKHJCApxMFZaLbzWoT_sg`;
    const response = await axios.get(url);
    if(!response) {
        return {error:'Something went wrong', data:undefined};
    }
    const body = response.data;
    const latitude = body.features[0].center[0];
    const longitude = body.features[0].center[1];
    const location = body.features[0].place_name;
    
    return {error:undefined, data:{latitude, longitude, location}};
}
//exportando a função para ser acessivel em outros modulos
export default geocode;
