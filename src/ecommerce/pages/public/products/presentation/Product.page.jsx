import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  ButtonNavigate,
  ImageLazy,
} from "../../../../../common/presentation/components";
import { ProductDescriptionBasic } from "./components";
import Styles from "./scss/product.module.scss";
import { useProductPage } from "./view-model/useProductPage";

const ProductPage = () => {
  const { product } = useProductPage();

  if (!product) {
    return <Navigate to="/products" />;
  }

  return (
    <main className={Styles.ProductContainer}>
      <div className={Styles.ProductContent}>
        {/* image */}
        <section className={Styles.ProductImageContainer}>
          <div className={Styles.ProductImageButton}>
            <ButtonNavigate
              text=""
              iconSize={30}
              navigateTo={() => window.history.back()}
              color="var(--color-primary)"
            />
          </div>

          <figure>
            <ImageLazy imageUri={product.imagen} />
          </figure>
        </section>

        {/* description */}
        <section className={Styles.ProductContentContainer}>
          <ProductDescriptionBasic product={product} layout={1} />
        </section>
      </div>
      <ToastContainer />
    </main>
  );
};

export default ProductPage;
