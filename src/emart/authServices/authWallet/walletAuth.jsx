import axios from "axios"
import {GET_WALLET} from '../../Global/globalEmar'
import { Http } from "@mui/icons-material"


export const getWallet = async (nit) => {
    let result
    await axios.get(GET_WALLET + `?nit=${nit}&page=1&rows=20`)
    .then((res) => {
        // console.log(result, "api")
        result = res
    })
    .catch((err) => {
        console.error(err)
    })
    return result
}


