import { useMemo } from "react"
import { format } from "../../../../../../../../common/presentation/utils"
import { useManageCart } from "../../../../../../../common/presentation/hooks"

export const useCardProduct = ({ product }) => {
  const { onAddProductToCart, onUpdateProductQuantity, quantity } =
    useManageCart({ product });

  const formatPriceWithTax = (price, tax) => {
    return format.formatDecimalPrice(
      parseFloat(price) + (parseFloat(price) * parseFloat(tax)) / 100
    );
  };

  const productPrices = useMemo(() => {
    const { price, tax, tax2, tax3 } = product;
    const priceWithoutTax = format.formatPrice(price);
    const priceWithTax =
      parseInt(tax) > 0 ? formatPriceWithTax(price, tax) : null;
    const priceWithTax2 =
      parseInt(tax2) > 0 ? formatPriceWithTax(price, tax2) : null;
    const sugaryTax =
      parseInt(tax3) > 0 ? format.formatDecimalPrice(tax3) : null;
    const totalPrice = format.formatPrice(
      parseFloat(price) +
        (parseFloat(price) * parseFloat(tax)) / 100 +
        parseFloat(tax3)
    );

    return {
      priceWithoutTax,
      priceWithTax,
      priceWithTax2,
      sugaryTax,
      totalPrice,
    };
  }, [product]);

  const generateProductSlug = (product) => {
    const slug =
      product.title.toLowerCase().replace(/\s/g, "-") + "-" + product.code;
    return slug;
  };

  return {
    generateProductSlug,
    onAddProductToCart,
    onUpdateProductQuantity,
    productPrices,
    quantity,
  };
};
