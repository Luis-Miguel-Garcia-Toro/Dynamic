import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { createCartSlice } from "./cart.slice"
import { createOrderSlice } from "./order.slice"
import { createUiSlice } from "./ui.slice"

export const useEcommerceStore = create(
  devtools(
    persist(
      (set, get, api) => ({
        ...createCartSlice(set, get, api),
        ...createUiSlice(set, get, api),
        ...createOrderSlice(set, get, api),

        resetCartStore: () => {
          const { clearCart, resetOrder } = get();
          clearCart();
          resetOrder();
        },
      }),
      { name: "app-ecommerce-store" }
    )
  )
);

export const usePageContext = create(
  persist(
    (set) => ({
      optionActive: 'home',
      optionSelected: 'orders',
      activateBoot : false,
      updateOptionActive: (item) =>
        set({
          optionActive: item
        }),
        setOptionSelected: (item) =>
        set({
          optionSelected: item
        }),
        setUpdateBoot: (item) =>
          set({
            activateBoot: item
          })
    
    }),
    { name: "pageContext" }
  )
)
