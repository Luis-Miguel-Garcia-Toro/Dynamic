import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createCartSlice } from "./cart.slice";
import { createUiSlice } from "./ui.slice";


const initialDataUser = {
  document: "860533413",
  business_name: "C.C LA SABANA",
  code: "400116003",
  name: "I.R.C.C  LA SABANA",
  main_address: "CL 7A 45 185 LC 210",
  phone: "3505372874",
  email: "",
  email_sucursal: "",
  paymentCondition: "CREDITO",
  business: "1000",
  frequent: "LU-MA-MI-JU-VI-SA-",
  seller: "IB003",
  application_type: "2",
  role: "0",
  delivery_area: "1111110",
  delivery_route: "V0100",
  double_autentication: "True",
  sms_autentication: "True",
  email_autentication: "True",
  subject: "Bienvenido a Alqueria B2B",
  message: "¡Hola C.C LA SABANA! Te saluda Alquería tienda virtual Tu código de validación es {0}",
  country: "CO",
  exp: 1718350057,
  iat: 1718350057,
  environment: "PRD",
  business_unit: "1000"
}


export const useEcommerceStore = create(
  devtools(
    persist(
      (...a) => ({
        ...createCartSlice(...a),
        ...createUiSlice(...a),

      }),
      { name: "app-ecommerce-store" }
    )
  )
);

export const useDataStore = create(
  persist(
    (set) => ({
      dataUser: initialDataUser,
      fechaEntrega: '',
      updateDataUser: () =>
        set({
          dataUser: initialDataUser
        }),
      updateFechaEntrega: (item) =>
        set({
          fechaEntrega: item
        }),
    }),

    {
      name: 'contextUser'
    }
  )
)