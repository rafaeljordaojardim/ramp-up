import request from 'request';
import axios from 'axios';
import Geocode from '../../../models/interfaces/geocode'

const geocode = async (address:string): Promise<Geocode> => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicmphcmRpbSIsImEiOiJjazBnenBtdW4wZDMwM2NyNGt5bzRvbzVtIn0.kXKHJCApxMFZaLbzWoT_sg`;
    const response = await axios.get(url);
    const body = response.data;
    const latitude = body.features[0].center[0];
    const longitude = body.features[0].center[1];
    const location = body.features[0].place_name;
    
    return {latitude, longitude, location};
}
//exportando a função para ser acessivel em outros modulos
export default geocode;
