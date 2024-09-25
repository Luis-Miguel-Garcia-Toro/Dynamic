import { useAppStore } from "../../../../../../../common/infrastructure/store/app.store";
import {callWompy} from '../../../../../../authServices/authWompy/wompyAuth'
import { useContextWallet } from '../../../../../../context/ContextWallet'

const PaymentWompi = () => {
    const { user } = useAppStore();
    const { updateTokenWompy, updateIdLastPayment } = useContextWallet()
    
    const payWompi = async (value) => {
        console.log("entra");
        // swal({
        //   title: 'Gracias por su pago',
        //   text: `En un momento serás redirigido a la pasarela de pagos `,
        //   icon: 'success'
        // })
          const documentList = value.invoices
          const fecha = new Date()
          const dias = 1
          fecha.setDate(fecha.getDate() + dias)
          let mes = fecha.getMonth()
          mes = parseInt(mes) + 1
          const str = new Date(fecha.getFullYear() + '-' + mes + '-' + fecha.getDate())
        
          let totalAux = Math.trunc(value.valuePayment)
          const data = {
            name: user.contactSelected.name,
            description: user.contactSelected.razon_social,
            amount: Math.round(totalAux),
            redirect_url: 'https://emartshop-af648.web.app/home',
            branch : user.contactSelected.code,
            nit: user.contactSelected.nit,
            business_unit: '7037',
            phone: user.contactSelected.phone,
            documentList: documentList,
            wallet: "wompi",
            email: user.contactSelected.email,
            environment: "prd",
          }
          let rest =  await callWompy(data)
          console.log(rest);
          if(rest.url !== 'no'){
            updateIdLastPayment(rest.id)
            updateTokenWompy(rest.token)
            window.open(rest.url, '_blank');
            
          }else{
            alert('no es posible realizar el pago')
          }
      }
    return {
        payWompi
    }
}

export default PaymentWompi
