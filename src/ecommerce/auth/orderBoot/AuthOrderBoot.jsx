import axios from "axios";
import { LOGIN_BOOT, BUSINESS_UNIT, SEN_NOTIFICATION } from "../../common/infrastructure/globals/globals";

export const AuthOrderBoot = async (codeClient) => {

  let url = `${LOGIN_BOOT}?branch=${codeClient}&business_unit=${BUSINESS_UNIT}`
  const option = {
    method: 'POST',
    url: url,
  }
  const result = await axios(option).then(res => {
    return res
  }).catch((err) => {
    return err
  })
  return result
}

export const sendNotificactionOrder = async (data) => {
  let url = SEN_NOTIFICATION
  const option = {
    data : data,
    method: 'POST',
    url: url,
  }
  const result = await axios(option).then(res => {
    return res
  }).catch((err) => {
    return err
  })
  return result

}

