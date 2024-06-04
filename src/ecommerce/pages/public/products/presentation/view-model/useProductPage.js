import { useLocation } from "react-router-dom";

export const useProductPage = () => {
  const location = useLocation();

  const product = location?.state?.product;

  return {
    product,
  };
};
