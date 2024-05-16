import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCartStore } from "../../../../../infrastructure/store";

export const useCardProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addProductToCart, updateProductQuantity, getItemFromCart } =
    useCartStore();

  const onUpdateProductQuantity = (product, quantity) => {
    updateProductQuantity(product, quantity);
    setQuantity(quantity);
  };

  const onAddProductToCart = (product) => {
    addProductToCart({ ...product, quantity: 1 });
    setQuantity(1);
    toast.success("Producto agregado al carrito", { autoClose: 2000 });
  };

  const getQuantityOfProduct = useCallback(() => {
    if (product.quantity) {
      setQuantity(product.quantity);
      return;
    }

    const itemInCart = getItemFromCart(product.id);
    if (itemInCart) {
      setQuantity(itemInCart.quantity);
    }
  }, [product, getItemFromCart]);

  //Update quantity if product exist in cart
  useEffect(() => {
    getQuantityOfProduct();
  }, [getQuantityOfProduct]);

  return {
    onAddProductToCart,
    onUpdateProductQuantity,
    quantity,
  };
};
