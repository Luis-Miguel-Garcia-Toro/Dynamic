import { useEffect, useState } from "react"
import { ScrollToTopButton } from "../../../../../common/presentation/components"
import AuthProducts from "../../../../auth/products/AuthProducts"
import { categoryStyle } from "../../../../common/domain"
import { useEcommerceStore, usePageContext } from "../../../../common/infrastructure/store"
import { Footer } from "../../../../common/presentation/components/footer/Footer"
import {
  CategoriesList,
  ProductBanner,
  ProductList,
  SidebarCategories,
} from "./components"
import Styles from "./scss/products.module.scss"
import { useAppStore } from "../../../../../common/infrastructure/store"
import FloatingBar from "../../../../common/presentation/components/floatingBar/floatingBar"
import MenuPage from "../../../private/menu/presentation/Menu.page"
import CartPage from "../../../private/cart/presentation/Cart.page"
import { LoadingEllipsis } from "../../../../../common/presentation/components/ui/loading/LoadingEllipsis";

const ProductsPage = () => {
  const { user } = useAppStore();
  const configPage = useEcommerceStore((state) => state.configPages);
  const { optionActive } = usePageContext();
  const categoryType = configPage?.categories_type || "";
  const [listProducts, setListProducts] = useState([]);
  const [activateMenu, setActivateMenu] = useState(true);
  const [loading, setLoading] = useState(true);
  const getProductsList = async (category, user) => {
    try {
      let result = await AuthProducts(category, "-1", user, 20);
      setListProducts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    let params = new URLSearchParams(window.location.href.split("?")[1]);
    let codeCategory = params.get("category");
    getProductsList(codeCategory ? codeCategory : "-1", user ? user.code : "-1");
  }, []);

  return (
    <div className={`${Styles.ProductsContainer} ${Styles[categoryType]}`}>
      {categoryType === categoryStyle.SIDEBAR && <SidebarCategories />}

      <div className={Styles.ProductsContent}>
        {optionActive === "cart" ? (
          <CartPage />
        ) : (
          <>
            {optionActive === "home" ? (
              <>
                <ProductBanner />
                {categoryType === categoryStyle.LIST && <CategoriesList />}

                <section className={Styles.ProductsList}>
                  {listProducts.length === 0 ? (
                    <>
                    {loading ? <LoadingEllipsis /> : <h2>No hay productos</h2>}
                    </>
                  ) : (
                    <ProductList
                      products={listProducts}
                      typeCards={configPage?.card_product_type}
                    />
                  )}
                </section>
                <Footer />
              </>
            ) : (
              <MenuPage />
            )}
          </>
        )}
        {optionActive !== "cart" ? <FloatingBar /> : null}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ProductsPage;
