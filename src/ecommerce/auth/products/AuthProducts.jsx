import axios from "axios";
import { GET_PRODUCT_B2B } from "../../common/infrastructure/globals/globals";
const AuthProducts = async (category, search) => {
    let res = await axios.post(`${GET_PRODUCT_B2B}codCategory=${category}&branch=400116003&filter=${search}&findProduct=-1&business_unit=1000&environment=dev&quantityPage=200&page=1`)
    .then((res) => {
      let result = res.data.data
      return result.data ? result.data : [] 
    }).catch((err) => {
      console.log(err)
    })
    return res;
  }

export default AuthProducts;

