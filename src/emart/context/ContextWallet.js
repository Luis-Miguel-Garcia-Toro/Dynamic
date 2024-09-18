import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useContextWallet = create(
  persist(
    (set) => ({
      optionSelected: 'home', // home - wallet - business
      indexoption : 0,
      businessSelected : '0000',
      updateOptionSeleted: (item) =>
        set({
            optionSelected: item,
        }),
      updateIndexOption: (index) =>
        set({
            indexoption: index
        }),
      updateBusinessSelected: (item) =>
        set({
            businessSelected: item
        }),
    }),
    {
      name: 'contextWallet'
    }
  )
)

