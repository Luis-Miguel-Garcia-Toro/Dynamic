import {AuthBanners} from "../../../../../../../auth/banners/AuthBanners"
import { useState } from "react"

const useProductBanner = () => {
    const [banner, setBanner] = useState([])
    const getBanners = () => {
        let result = AuthBanners()
        console.log(result);
        setBanner(result.data);
    }
 
    return{
        getBanners,
        banner
    }
}

export default useProductBanner