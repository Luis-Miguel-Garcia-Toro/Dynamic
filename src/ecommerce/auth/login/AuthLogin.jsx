
import { LOGIN_USER, VALIDATE_CODE}from "../../common/infrastructure/globals/globals"
import axios from "axios";
export const AuthLogin = async () => {
    let res = await axios.post(`${LOGIN_USER}`,{
            user: "400116003",
            password: "santa123",
            business_code: "1000",
            environment: "prd"
    })
    .then((res) => {
      console.log(res.data.data)
      let result = res.data.data
      return result.data ? result.data : [] 
    }).catch((err) => {
      console.log(err)
    })
    return res;
  }
// import jwt_decode from 'jwt-decode'
//   let convertResult = jwt_decode(res.Data.accessToken)

export const validateCode = async (code) => {
    let res = await axios.post(`${LOGIN_USER}code=${code}`,{
            user: "400116003",
            password: "santa123",
            business_code: "1000",
            environment: "prd"
    })
    .then((res) => {
      console.log(res)
      let result = res.data.data
      return result.data ? result.data : [] 
    }).catch((err) => {
      console.log(err)
    })
    return res;
  }






