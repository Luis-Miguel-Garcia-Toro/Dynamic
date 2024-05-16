import { ProductList } from "@/ecommerce/common/presentation/components";
import { useAppStore } from "../../../../../common/infrastructure/store";
import { categoryStyle } from "../../../../common/domain";
import {
  CategoriesList,
  SidebarCategories,
} from "../../../../common/presentation/components";
import { fakeProductsSanity } from "../domain/products.data";
import Styles from "./scss/home.module.scss";

export const HomePage = () => {
  const configPage = useAppStore((state) => state.configPages);
  const categoryType = configPage?.categories?.categoriesStyle || "";

  return (
    <div className={`${Styles.HomeContainer} ${Styles[categoryType]}`}>
      <section className={Styles.HomeCategories}>
        {categoryType === categoryStyle.LIST && <CategoriesList />}
        {categoryType === categoryStyle.SIDEBAR && <SidebarCategories />}
      </section>

      <section className={Styles.HomeProducts}>
        <ProductList
          products={fakeProductsSanity}
          typeCards={configPage?.products?.typeCard}
        />
      </section>
    </div>
  );
};

export default HomePage;
