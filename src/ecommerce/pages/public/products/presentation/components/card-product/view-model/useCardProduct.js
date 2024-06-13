import { useManageCart } from "../../../../../../../common/presentation/hooks";

export const useCardProduct = ({ product }) => {
  const { onAddProductToCart, onUpdateProductQuantity, quantity } =
    useManageCart({ product });

  const generateProductSlug = (product) => {
    const slug =
      product.title.toLowerCase().replace(/\s/g, "-") + "-" + product.code;
    return slug;
  };

  return {
    generateProductSlug,
    onAddProductToCart,
    onUpdateProductQuantity,
    quantity,
  };
};
