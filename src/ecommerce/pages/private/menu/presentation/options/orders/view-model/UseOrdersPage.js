import {OrderHistory} from "../../../../../../../auth/order/AuthOrder"
import { useAppStore } from "../../../../../../../common/infrastructure/store"
export const UseOrdersPage = () => {
    const {  } = useAppStore();
    const [HistoryOrders, setHistoryOrders] = useState([]);


    const getHistoryOrder = async () =>{

        let result = await OrderHistory()
        console.log(result);
    }

    return {


    }

}