import { GET_PRODUCT_B2B}from "../../common/infrastructure/globals/globals"
import axios from "axios";
const AuthProducts = async (category) => {
    let res = await axios.post(`${GET_PRODUCT_B2B}codCategory=${category}&branch=-1&filter=-1&findProduct=-1&business_unit=1000&environment=prd&quantityPage=200&page=1`)
    .then((res) => {
      console.log(res.data.data)
      let result = res.data.data
      return result.data ? result.data : [] 
    }).catch((err) => {
      console.log(err)
    })
    return res;
  }

export default AuthProducts;

