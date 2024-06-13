import { GET_CATEGORY_B2B}from "../../common/infrastructure/globals/globals"
import axios from "axios";
const AuthCategories = async () => {
    let res = await axios.post(`${GET_CATEGORY_B2B}`)
    .then((res) => {
      return res.data.data
    }).catch((err) => {
      console.log(err)
    })
    return res;
  }

export default AuthCategories;