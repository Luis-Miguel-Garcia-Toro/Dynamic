import { ProductList } from "@/common/presentation/components";
import { fakeProductsSanity } from "../domain/products.data";
import Styles from "./scss/home.module.scss";

export const HomePage = () => {
  return (
    <div className={Styles.HomeContainer}>
      <ProductList products={fakeProductsSanity} typeCards="horizontal" />
    </div>
  );
};

export default HomePage;
