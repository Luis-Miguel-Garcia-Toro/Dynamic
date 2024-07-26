import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authStateStatus } from "../../common/domain";
import { useAppStore } from "../../common/infrastructure/store";
import { LoadingFull } from "../../common/presentation/components";
import { RootEcommerceLayout } from "../common/presentation/components";
import { PrivateRoutes } from "./private-routes/PrivateRoutes";
import { AuthRoutes, ProductsRoutes } from "./public-routes";
import { toast } from "react-toastify"
import { AuthOrderBoot } from '../auth/orderBoot/AuthOrderBoot'
import {usePageContext} from "../common/infrastructure/store"
import {useEcommerceStore} from '../common/infrastructure/store'


export const EcommerceRoutes = () => {
  const { authStatus } = useAppStore();
  const [loginBoot, setLoginBoot] = useState(false);
  const {updateOptionActive, setOptionSelected, setUpdateBoot} = usePageContext();
  const isAuthenticated = authStatus === authStateStatus.AUTHENTICATED;
  const { login, logout } = useAppStore();
  const {clearCart} = useEcommerceStore()

  const OrderBoot = async (codeClient, suggested) => {
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
      if(suggested == 1 ){
        setOptionSelected("suggested")
        updateOptionActive("menu")
      }else{
        setOptionSelected("home")
        updateOptionActive("home")
      }
      login({...userJWT, userToken : result.data.token},'/products');
  }
    setLoginBoot(true)
  }

  useEffect(() => {
    let URLactual = document.location
    const urlParams = new URLSearchParams(URLactual.search)
    const codeClient = urlParams.get('branch');
    const suggested = urlParams.get('suggested');
   if(codeClient){
    clearCart()
    logout();
    OrderBoot(codeClient, suggested)
    setUpdateBoot(true)
   }else{
    setUpdateBoot(false)
   }
   //http://localhost:5173/orderbot?sucursal=400116003&suggested=0
  }, []);

  return (
    <Suspense fallback={<LoadingFull show={true} />}>
      <BrowserRouter>
        <RootEcommerceLayout>
          <Routes>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route
              path="/auth/*"
              element={
                isAuthenticated || loginBoot ? <Navigate to="/products" /> : <AuthRoutes />
              }
            />
            <Route path="/products/*" element={<ProductsRoutes />} />
          </Routes>
        </RootEcommerceLayout>
      </BrowserRouter>
    </Suspense>
  );
};
