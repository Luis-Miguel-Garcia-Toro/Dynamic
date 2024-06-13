import { GET_PRODUCT_B2B}from "../../common/infrastructure/globals/globals"
import axios from "axios";
const AuthProducts = async () => {
    let res = await axios.post(`${GET_PRODUCT_B2B}codCategory=-1&branch=-1&filter=-1&findProduct=-1&business_unit=1000&environment=prd&quantityPage=200&page=1`)
    .then((res) => {
      return res.data.data.data
    }).catch((err) => {
      console.log(err)
    })
    return res;
  }

export default AuthProducts;

