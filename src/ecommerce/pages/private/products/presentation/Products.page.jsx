import { useAppStore } from "../../../../../common/infrastructure/store";
import { categoryStyle } from "../../../../common/domain";
import { fakeProductsSanity } from "../domain/products.data";
import { CategoriesList, ProductList, SidebarCategories } from "./components";
import Styles from "./scss/products.module.scss";

const ProductsPage = () => {
  const configPage = useAppStore((state) => state.configPages);
  const categoryType = configPage?.categories?.categoriesStyle || "";

  return (
    <div className={`${Styles.ProductsContainer} ${Styles[categoryType]}`}>
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
    </div>
  );
};

export default ProductsPage;
