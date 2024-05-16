import { useCartStore } from "../../../../../common/infrastructure/store/cart.store";

export const useCartPage = () => {
  const cart = useCartStore((state) => state.cart);

  return {
    cart,
  };
};
