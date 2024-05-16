import { CardProduct } from "../../products/presentation/components";
import { EmptyCart, OrderSummary } from "./components";
import Styles from "./scss/cart.module.scss";
import { useCartPage } from "./view-model/useCartPage";

const CartPage = () => {
  const { cart } = useCartPage();

  return (
    <main className={Styles.CartPageContainer}>
      <>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <section className={Styles.CartPageContent}>
            <article className={Styles.CartProducts}>
              <h1 className="title fadeIn">Mi carrito</h1>

              <div className={Styles.CartProductsList}>
                {cart.map((product) => (
                  <CardProduct
                    contentClassName={Styles.CartProductContent}
                    type="horizontal"
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </article>

            <article className={Styles.CartDetail}>
              <OrderSummary />
            </article>
          </section>
        )}
      </>
    </main>
  );
};

export default CartPage;
