import { useEffect, useState } from "react";
import { ScrollToTopButton } from "../../../../../common/presentation/components";
import { categoryStyle } from "../../../../common/domain";
import { useEcommerceStore } from "../../../../common/infrastructure/store";
import { Footer } from "../../../../common/presentation/components/footer/Footer";
import {
  CategoriesList,
  ProductBanner,
  ProductList,
  SidebarCategories
} from "./components";
import Styles from "./scss/products.module.scss";
import AuthProducts from "../../../../auth/products/AuthProducts";

const ProductsPage = () => {
  const configPage = useEcommerceStore((state) => state.configPages);
  const categoryType = configPage?.categories_type || "";
  const [listProducts, setListProducts] = useState([]);


  const getProductsList = async () => {
    try {
      let result = await AuthProducts();
      console.log(result);
      setListProducts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductsList();
  },[])
 

  return (
    <div className={`${Styles.ProductsContainer} ${Styles[categoryType]}`}>
      {categoryType === categoryStyle.SIDEBAR && <SidebarCategories />}

      <div className={Styles.ProductsContent}  >
        <ProductBanner />
        {categoryType === categoryStyle.LIST && <CategoriesList />}

        <section className={Styles.ProductsList}>
          <ProductList
            products={listProducts}
            typeCards={configPage?.card_product_type}
          />
        </section>
        <Footer />
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default ProductsPage;
