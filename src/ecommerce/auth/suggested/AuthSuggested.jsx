import axios from "axios";
import { GET_SUGGESTED } from "../../common/infrastructure/globals/globals";
const AuthSuggested = async (token, branch) => {
    const option = {
      method: 'GET',
      url: GET_SUGGESTED + `?branch=${branch}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    const result = await axios(option).then(res => {
        return res
      }).catch((err) => {
        return err
      })
      return result
  }

export default AuthSuggested;



