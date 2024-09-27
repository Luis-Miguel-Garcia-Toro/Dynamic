import { useAppStore } from "../../../../../../../common/infrastructure/store/app.store";
import {callCwpay} from '../../../../../../authServices/authCwpay/cwAuth'
import { useContextWallet } from '../../../../../../context/ContextWallet'

const PaymentCwPay = () => {
    const { user } = useAppStore();
    const { updateTokenWompy, updateIdLastPayment } = useContextWallet()
    
    const payCW = async (value) => {
        console.log(value);
        if(value.valuePayment > 0 ){
          const documentList = value.invoices
          let totalAux = Math.trunc(value.valuePayment)
          const data = {
            description : user.contactSelected.razon_social,
            nit : user.contactSelected.nit,
            branch : user.contactSelected.code,
            amount : totalAux,
            business_unit : '1000',
            app: "payments",
            documentList: documentList,
          }
          let rest =  await callCwpay(data)
          console.log(rest);
          if(rest.pay_link){
            updateIdLastPayment(rest.id)
            window.open(rest.pay_link, '_blank');
          }else{
            alert('no es posible realizar el pago')
          }
        }
      }
    return {
        payCW
    }
}

export default PaymentCwPay
