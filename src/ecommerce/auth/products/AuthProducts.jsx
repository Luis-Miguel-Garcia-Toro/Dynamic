import axios from "axios";
import { GET_PRODUCT_B2B, BUSINESS_UNIT } from "../../common/infrastructure/globals/globals";
const AuthProducts = async (category, search, user, quantityPage) => {
    let res = await axios.post(`${GET_PRODUCT_B2B}codCategory=${category}&branch=${user}&filter=${search}&findProduct=-1&business_unit=${BUSINESS_UNIT}&environment=dev&quantityPage=${quantityPage ? quantityPage : 200}&page=1`)
    .then((res) => {
      let result = res.data.data
      return result.data ? result.data : [] 
    }).catch((err) => {
      console.error(err)
    })
    return res;
  }

export default AuthProducts;

