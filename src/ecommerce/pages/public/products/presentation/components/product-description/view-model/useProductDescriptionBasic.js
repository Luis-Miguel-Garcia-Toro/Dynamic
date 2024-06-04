import { useNavigate } from "react-router-dom";
import { useManageCart } from "../../../../../../../common/presentation/hooks";

export const useProductDescriptionBasic = ({ product }) => {
  const { onAddProductToCart, onUpdateProductQuantity, quantity } =
    useManageCart({ product });
  const navigate = useNavigate();

  const goToCart = () => navigate("/cart");

  return {
    goToCart,
    onAddProductToCart,
    onUpdateProductQuantity,
    quantity,
  };
};
