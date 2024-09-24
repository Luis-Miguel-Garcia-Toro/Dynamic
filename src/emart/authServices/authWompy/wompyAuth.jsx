import axios from "axios"
import { SUBMITWOMPY, SUBMITWOMPYQA } from '../../Global/globalEmar'
import { resolveTimeViewsResponse } from "@mui/x-date-pickers/internals"


export const callWompy = async (dataCLient) => {
    let result 
    await axios.post('https://cwpay.sandboxcw.net/api/auth/auth', {
        user: "1053790872",
        password: "1053790872",
        app: "payments",
        business_unit: 0
    }).then(async (res) => {
        let token = res.data.token
        const options = {
            method: 'POST',
            url: SUBMITWOMPYQA,
            data: dataCLient,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        await axios.request(options).then
            ((response) => {
                result = response.data
            }).catch((error) => {
                result = 'no'
            });

    }).catch((err) => {
        result = 'no'
    });
    return result
}



