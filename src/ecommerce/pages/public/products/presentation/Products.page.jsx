import { useEffect, useState } from "react";
import { ScrollToTopButton } from "../../../../../common/presentation/components";
import AuthProducts from "../../../../auth/products/AuthProducts";
import { categoryStyle } from "../../../../common/domain";
import { useEcommerceStore } from "../../../../common/infrastructure/store";
import { Footer } from "../../../../common/presentation/components/footer/Footer";
import {
  CategoriesList,
  ProductBanner,
  ProductList,
  SidebarCategories,
} from "./components";
import Styles from "./scss/products.module.scss";
import {useDataStore} from '../../../../../ecommerce/common/infrastructure/store/ecommerce.store'

const ProductsPage = () => {
  const configPage = useEcommerceStore((state) => state.configPages);
  const categoryType = configPage?.categories_type || "";
  const [listProducts, setListProducts] = useState([]);
  const {updateDataUser} = useDataStore()


  const getProductsList = async (category) => {
    try {
      let result = await AuthProducts(category);
      console.log(result);
      setListProducts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateDataUser()
    let params = new URLSearchParams(window.location.href.split("?")[1]);
    let codeCategory = params.get("category")
    getProductsList(codeCategory ? codeCategory : '-1');

  }, [])


  return (
    <div className={`${Styles.ProductsContainer} ${Styles[categoryType]}`}>
      {categoryType === categoryStyle.SIDEBAR && <SidebarCategories />}

      <div className={Styles.ProductsContent}>
        <ProductBanner />
        {categoryType === categoryStyle.LIST && <CategoriesList />}

        <section className={Styles.ProductsList}>
          {listProducts.length === 0 ? <h2>No hay productos</h2> : (
            <ProductList
              products={listProducts}
              typeCards={configPage?.card_product_type}
            />
          )}
        </section>
        <Footer />
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default ProductsPage;
