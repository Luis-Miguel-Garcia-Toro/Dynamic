import axios from "axios"
import { GENERATE_INTENTION_PAY_CWPAY } from '../../Global/globalEmar'


export const callCwpay = async (dataCLient) => {
    let result
        const options = {
            method: 'POST',
            url: GENERATE_INTENTION_PAY_CWPAY,
            data: dataCLient
        }
        await axios.request(options).then
            ((response) => {
                result = response.data
            }).catch((error) => {
                result = 'no'
            });
    return result
}



