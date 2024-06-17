import axios from "axios";
import { NEW_ORDER } from "../../common/infrastructure/globals/globals";

const AuthNewOrder = async (order, userToken) => {

  let url = NEW_ORDER
  const option = {
    method: 'POST',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`
    },
    data: order
  }
  const result = await axios(option).then(res => {
    return res
  }).catch((err) => {
    return err
  })
  return result
}

export default AuthNewOrder;



