import { IoClose } from "react-icons/io5"
import { CardProductCart } from "../../../../../public/products/presentation/components"
import { EmptyCart } from "../empty-cart/EmptyCart"
import { OrderSummary } from "../order-summary/OrderSummary"
import ResultOrder from "../result-order/result"
import Styles from "./scss/side-cart.module.scss"
import { useSideCart } from "./view-model/useSideCart"

export const SideCart = () => {
  const {
    cart,
    toggleActiveSideCart,
    animationClass,
    isVisible,
    sideCartRef,
    orderResult,
  } = useSideCart();

  if (!isVisible) return null;

  return (
    <div className={Styles.SideCart}>
      <div className={Styles.SideCartContent}>
        {orderResult ? (
          <div className={Styles.CartResult}>
            <ResultOrder customClassName={Styles.OrderResultContainer} />
          </div>
        ) : (
          <aside
            ref={sideCartRef}
            className={`${Styles.SideCartContainer} ${
              isVisible ? Styles.Active : ""
            } ${Styles[animationClass]}`}
          >
            <div className={Styles.CartContent}>
              <div className={Styles.CartHeader}>
                <h2>Carrito de compra</h2>
                <button onClick={toggleActiveSideCart}>
                  <IoClose color="var(--color-primary)" size={30} />
                </button>
              </div>

              {cart.length === 0 ? (
                <EmptyCart showButton={false} showTitle={false} />
              ) : (
                <div className={Styles.CartProductsGrid}>
                  {cart.map((product, index) => (
                    <CardProductCart
                      size="small"
                      contentClassName={Styles.CartProductContent}
                      key={`${product.code}-${index}`}
                      product={product}
                    />
                  ))}
                </div>
              )}

              {cart.length > 0 && (
                <div className={Styles.CartSummary}>
                  <OrderSummary />
                </div>
              )}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};
