import { useEcommerceStore } from "../../../../../common/infrastructure/store";

export const useCartPage = () => {
  const cart = useEcommerceStore((state) => state.cart);

  return {
    cart,
  };
};
