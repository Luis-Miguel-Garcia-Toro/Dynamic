import axios from "axios";
import { GET_BANNER } from "../../common/infrastructure/globals/globals";
export const AuthBanners = async () => {
    let res = await axios.get(GET_BANNER)
    .then((res) => {
        
      let result = res.data.data
      return result.data ? result.data : [] 
    }).catch((err) => {
      console.error(err)
    })
    return res;
  }


