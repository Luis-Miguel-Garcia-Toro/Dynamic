import axios from "axios"
import { SUBMITWOMPY } from '../../Global/globalEmar'
import { resolveTimeViewsResponse } from "@mui/x-date-pickers/internals"


export const callWompy = async (dataCLient) => {
    let result 
    await axios.post('https://cwpay.celuwebcloud.com/api/auth/auth', {
        user: "mundial",
        password: "santa123",
        app: "mundial",
        business_unit: 7073
    }).then(async (res) => {
        let token = res.data.token
        const options = {
            method: 'POST',
            url: SUBMITWOMPY,
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



