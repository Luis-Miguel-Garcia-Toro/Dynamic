import { ScrollToTopButton } from "../../../../../common/presentation/components";
import { categoryStyle } from "../../../../common/domain";
import { useEcommerceStore } from "../../../../common/infrastructure/store";
import { Footer } from "../../../../common/presentation/components/footer/Footer";
import { fakeProductsSanity } from "../domain/products.data";
import {
  CategoriesList,
  ProductBanner,
  ProductList,
  SidebarCategories
} from "./components";
import Styles from "./scss/products.module.scss";

const ProductsPage = () => {
  const configPage = useEcommerceStore((state) => state.configPages);
  const categoryType = configPage?.categories_type || "";

  return (
    <div className={`${Styles.ProductsContainer} ${Styles[categoryType]}`}>
      {categoryType === categoryStyle.SIDEBAR && <SidebarCategories />}

      <div className={Styles.ProductsContent}  >
        <ProductBanner />
        {categoryType === categoryStyle.LIST && <CategoriesList />}

        <section className={Styles.ProductsList}>
          <ProductList
            products={fakeProductsSanity}
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
