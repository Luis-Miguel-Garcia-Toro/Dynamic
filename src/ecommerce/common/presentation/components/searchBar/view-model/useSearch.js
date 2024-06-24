import Fuse from "fuse.js"
import { useState } from "react"
import AuthProducts from "../../../../../auth/products/AuthProducts"
import { useEcommerceStore } from "../../../../infrastructure/store"
// import { useAppStore } from "../"
import { useAppStore } from "../../../../../../common/infrastructure/store"

export const useSearch = () => {
  const { configPages } = useEcommerceStore();
  const [isSearching, setIsSearching] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [findFilter, setFindFilter] = useState("");
  const { user } = useAppStore();
  let searchProduct = [];

  const getProductsSearch = (productSearching) => {
    const options = {
      includeScore: true,
      keys: [
        { name: "code", weight: 0.7 },
        { name: "title", weight: 0.3 },
      ],
    };
    searchProduct.push(productSearching);
    setFindFilter(productSearching);
    if (productSearching !== "" && productSearching.length > 0) {
      setLoadingProducts(true);
      setTimeout(async () => {
        let result = await AuthProducts("-1", "-1",user.code ? user.code : "-1");
        const fuse = new Fuse(result, options);
        const resultSearch = fuse.search(productSearching);
        if (result) {
          const products = resultSearch.map(({ item }) => item);
          setListProducts(products);
          setLoadingProducts(false);
        } else {
          setLoadingProducts(false);
        }
      }, 500);
      setIsSearching(true);
    } else if (productSearching === "") {
      setListProducts([]);
      setIsSearching(false);
    }
  };

  const onClickOutside = () => {
    setFindFilter("");
    setIsSearching(false);
  };

  return {
    getProductsSearch,
    listProducts,
    isSearching,
    loadingProducts,
    findFilter,
    onClickOutside,
    configPages,
  };
};
