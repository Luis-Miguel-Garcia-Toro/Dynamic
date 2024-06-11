import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createCartSlice } from "./cart.slice";
import { createUiSlice } from "./ui.slice";

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
