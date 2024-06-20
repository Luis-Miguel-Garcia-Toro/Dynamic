import axios from "axios";
import { NEW_ORDER, GET_ORDER_HISTORY } from "../../common/infrastructure/globals/globals";

export const AuthNewOrder = async (order, userToken) => {

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

export const OrderHistory = async (token, initial, end) => {
  let url = `${GET_ORDER_HISTORY}?initialDate=${initial}&endDate=${end}`
  const option = {
    method: 'POST',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  const result = await axios(option).then(res => {
    return res
  }).catch((err) => {
    return err
  })
  return result
}




