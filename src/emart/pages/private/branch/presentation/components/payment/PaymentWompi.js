import { useAppStore } from "../../../../../../../common/infrastructure/store/app.store";
import {callWompy} from '../../../../../../authServices/authWompy/wompyAuth'

const PaymentWompi = () => {
    const { user } = useAppStore();
    const payWompi =  async (value) => {
      console.log(value)
      console.log(user);
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
          let totalAux = (value.valuePayment) * 100
          totalAux = Math.trunc(totalAux)
        
          const data = {
            name: user.contactSelected.name,
            description: user.contactSelected.razon_social,
            single_use: true,
            currency: 'COP',
            amount: Math.round(totalAux),
            expires_at: str,
            redirect_url: 'https://www.mundial-digital.com/wallet-state',
            image_url: null,
            sku: user.contactSelected.code,
            nit: user.contactSelected.nit,
            phone: user.contactSelected.phone,
            collect_shipping: false,
            customer_data: { customer_references: [{ label: 'Cedula', is_required: true }] },
            documentList: documentList,
            app: 'MUNDIALDIGITAL',
            branch: user.contactSelected.code,
            business_unit: '7037',
            environment: 'prd',
            email: user.contactSelected.email
          }
    
          let rest =  await callWompy(data)
          console.log(rest);
          console.log(data);
      }

    return {
        payWompi
    }
}

export default PaymentWompi
