import axios from "axios"
import { SUBMITWOMPY } from '../../Global/globalEmar'


export const callWompy = async (dataCLient) => {
    let result
    const options = {
        method: 'POST',
        url: SUBMITWOMPY,
        data: dataCLient,
        headers:{
            'Content-Type': 'application/json'
        }
    }
  
    await axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    // return result
}
