import { useEcommerceStore } from "../../../../common/infrastructure/store"
import { CardProductCart } from "../../../public/products/presentation/components"
import { EmptyCart, OrderSummary } from "./components"
import Styles from "./scss/cart.module.scss"
const CartPage = () => {
  const { cart, orderResult } = useEcommerceStore();

  console.log({ orderResult });

  return (
    <main className={Styles.CartPageContainer}>
      {cart.length === 0 && <EmptyCart />}

      {cart.length > 0 && (
        <section className={Styles.CartPageContent}>
          <article className={Styles.CartProducts}>
            <h1 className="title fadeIn">Mi carrito</h1>

            <div className={Styles.CartProductsList}>
              {cart.map((product, index) => (
                <CardProductCart
                  contentClassName={Styles.CartProductContent}
                  type="full"
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
