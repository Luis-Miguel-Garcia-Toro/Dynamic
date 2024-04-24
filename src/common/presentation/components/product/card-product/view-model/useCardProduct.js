import { useState } from "react";

export const useCardProduct = () => {
  const [quantity, setQuantity] = useState(0);

  const onChangeQuantity = (value) => {
    setQuantity(value);
  };

  return {
    onChangeQuantity,
    quantity,
  };
};
