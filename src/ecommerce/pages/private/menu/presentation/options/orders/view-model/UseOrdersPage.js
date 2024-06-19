import {OrderHistory} from "../../../../../../../auth/order/AuthOrder"
import { useAppStore } from "../../../../../../../../common/infrastructure/store"
import {useState} from "react"
export const UseOrdersPage = () => {
    const { user } = useAppStore();
    const [HistoryOrders, setHistoryOrders] = useState([]);


    const getHistoryOrder = async () =>{
        console.log(user);
        let result = await OrderHistory()
        console.log(result);
    }

    return {
        getHistoryOrder

    }

}