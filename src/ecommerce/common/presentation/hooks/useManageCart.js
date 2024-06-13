import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useEcommerceStore } from "../../infrastructure/store";

export const useManageCart = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addProductToCart, updateProductQuantity, cart } =
  useEcommerceStore();

  const onUpdateProductQuantity = (product, quantity) => {
    updateProductQuantity(product, quantity);
    // setQuantity(quantity);
  };

  const onAddProductToCart = (product) => {
    addProductToCart({ ...product, quantity: 1 });
    // setQuantity(1);
    toast.success("Producto agregado al carrito", { autoClose: 2000 });
  };

  const getQuantityOfProduct = useCallback(() => {
    const itemInCart = cart.find((prod) => prod.code === product?.code);
    if (itemInCart) {
      setQuantity(itemInCart.quantity);
    } else {
      setQuantity(0);
    }
  }, [product, cart]);

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
