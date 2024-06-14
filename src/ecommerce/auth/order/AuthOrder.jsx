import axios from "axios";
import { NEW_ORDER } from "../../common/infrastructure/globals/globals";
const AuthNewOrder = async (order) => {
    console.log(order);
    let res = await axios.post(`${NEW_ORDER}`,order)
    .then((res) => {
      let result = res
     console.log(res);
    }).catch((err) => {
      console.log(err)
    })
    return res;
  }

export default AuthNewOrder;



