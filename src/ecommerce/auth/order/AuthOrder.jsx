import axios from "axios";
import { NEW_ORDER, URL_BASE_ECOMMERCE } from "../../common/infrastructure/globals/globals";

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

export const OrderHistory = async (token) => {
  let url = `${URL_BASE_ECOMMERCE}?initialDate=2024-06-01&endDate=2024-06-19`
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




