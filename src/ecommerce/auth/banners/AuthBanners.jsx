import axios from "axios";
import { GET_BANNER } from "../../common/infrastructure/globals/globals";
export const AuthBanners = async () => {
    let res = await axios.get(GET_BANNER)
    .then((res) => {
        console.log(res);
      let result = res.data.data
      return result.data ? result.data : [] 
    }).catch((err) => {
      console.log(err)
    })
    return res;
  }


