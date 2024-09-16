import { useEffect } from "react"
import { useEcommerceStore } from "../../../../common/infrastructure/store"
import { CardProductCart } from "../../../public/products/presentation/components"
import { EmptyCart, OrderSummary } from "./components"
import ResultOrder from "./components/result-order/result"
import Styles from "./scss/cart.module.scss"
const CartPage = () => {
  const { cart, orderResult, resetCartStore, isCheckout } = useEcommerceStore();

  useEffect(() => {
    if (orderResult) {
      resetCartStore();
      console.log("entra a carrito ")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={Styles.CartPageContainer}>
      {orderResult && <ResultOrder />}

      {cart.length === 0 && !orderResult && <EmptyCart />}

      {cart.length > 0 && !orderResult && (
        <section className={Styles.CartPageContent}>
          <article className={Styles.CartProducts}>
            <h1 className="title fadeIn">Mi carrito</h1>

            <div className={Styles.CartProductsList}>
              {cart.map((product, index) => (
                <CardProductCart
                  showButtons={!isCheckout}
                  contentClassName={Styles.CartProductContent}
                  key={`${product.code}-${index}`}
                  product={product}
                />
              ))}
            </div>
          </article>

          <article className={Styles.CartDetail}>
            <div className={Styles.CartDetailContent}>
              <OrderSummary />
            </div>
          </article>
        </section>
      )}
    </main>
  );
};

export default CartPage;
