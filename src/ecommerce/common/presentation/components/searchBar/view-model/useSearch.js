import React, { useState } from "react";
import AuthProducts from "../../../../../auth/products/AuthProducts"

export const useSearch = () => {

  const [listProducts, setListProducts] = useState([]);
  const getProductsSearch = async (value) => {
    console.log(value);
    if (value.length < 3) return
    else {
      try {
        let result = await AuthProducts('-1', value);
        console.log(result);
        setListProducts(result);
      } catch (error) {
        console.error(error);
      }
    }
  }
  return {
    getProductsSearch,
    listProducts
  }
}



