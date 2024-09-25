import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useContextWallet = create(
  persist(
    (set) => ({
      optionSelected: 'home', // home - wallet - business
      indexoption :'home' ,
      businessSelected : '0000', // seleccion de negocios
      businessData:  [1], // para seleccionar  negocio desde wallet
      tokenWompy : null,
      idLastPayment : '',
      updateOptionSeleted: (item) =>
        set({
            optionSelected: item,
        }),
      updateIndexOption: (index) =>
        set({
            indexoption: index
        }),
        updateDatabusiness: (index) =>
          set({
            businessData: index
          }),
      updateBusinessSelected: (item) =>
        set({
            businessSelected: item
        }),
      updateTokenWompy: (item) =>
        set({
            tokenWompy: item
        }),
      updateIdLastPayment: (item) =>
        set({
          idLastPayment: item
        }),
    }),
    {
      name: 'contextWallet'
    }
  )
)

