import { useAppStore } from "../../../../../common/infrastructure/store"
import { ScrollToTopButton } from "../../../../../common/presentation/components"
import { categoryStyle } from "../../../../common/domain"
import { Footer } from "../../../../common/presentation/components/footer/Footer"
import { fakeProductsSanity } from "../domain/products.data"
import {
  CategoriesList,
  ProductBanner,
  ProductList,
  SidebarCategories,
} from "./components"
import Styles from "./scss/products.module.scss"

const ProductsPage = () => {
  const configPage = useAppStore((state) => state.configPages);
  const categoryType = configPage?.categories?.categoriesStyle || "";

  return (
    <div className={`${Styles.ProductsContainer} ${Styles[categoryType]}`}>
      <ProductBanner />

      <section className={Styles.ProductsCategories}>
        {categoryType === categoryStyle.LIST && <CategoriesList />}
        {categoryType === categoryStyle.SIDEBAR && <SidebarCategories />}
      </section>

      <section className={Styles.ProductsList}>
        <ProductList
          products={fakeProductsSanity}
          typeCards={configPage?.products?.typeCard}
        />
      </section>

      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default ProductsPage;
