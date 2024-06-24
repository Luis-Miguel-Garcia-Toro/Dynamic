import { useEffect } from "react"
import { AuthOrderBoot } from '../../../../../auth/orderBoot/AuthOrderBoot'
import { useAppStore } from "../../../../../../common/infrastructure/store"

const LoginBoot = () => {
    const { login } = useAppStore();
    const loginBoot = async (codeClient) => {
        let result = await AuthOrderBoot(codeClient)
    
        if (result.status !== 200) {
            toast.error(
                "Ocurrió un error al validar a ingresar, el usuario es incorrecto."
              );
        } else {
            const userJWT =
            {
                document: result.data.document,
                business_name: result.data.business,
                code: result.data.code,
                name: result.data.name,
                main_address: result.data.main_address,
                phone: result.data.phone,
                email: result.data.email,
                email_sucursal: result.data.email,
                paymentCondition: result.data.paymentCondition,
                business: result.data.business,
                frequent: result.data.frequent,
                seller: result.data.seller,
                application_type: 3,
                role: "0",
                delivery_area: result.data.delivery_area,
                delivery_route: result.data.delivery_route,
                chatbot_phone: result.data.phone
            }
            login({...userJWT, userToken : result.data.token},'/products');
        }
    };


    useEffect(() => {
        let params = new URLSearchParams(window.location.href.split("?")[1]);
        let codeClient = params.get("sucursal")
        loginBoot(codeClient);
    }, [])

}

export default LoginBoot