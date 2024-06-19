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
