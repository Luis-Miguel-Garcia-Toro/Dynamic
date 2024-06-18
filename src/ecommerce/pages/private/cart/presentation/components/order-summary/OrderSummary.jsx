import es from "date-fns/locale/es"
import moment from "moment"
import "moment/locale/es"
import { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Button } from "../../../../../../../common/presentation/components"
import { format } from "../../../../../../../common/presentation/utils"
import { Checkout, MinShippingValue } from "../index"
import Styles from "./scss/order-summary.module.scss"
import { useOrderSummary } from "./view-model/useOrderSummary"
registerLocale("es", es);

export const OrderSummary = () => {
  const {
    deliveryDate,
    isCheckout,
    MIN_SHIPPING_VALUE,
    onToggleIsCheckout,
    total,
    totalData,
  } = useOrderSummary();

  return (
    <div className={`${Styles.OrderSummaryContainer} fadeIn`}>
      {/* Resumen de pedido */}
      {!isCheckout && (
        <div className={`${Styles.OrderSummary} fadeIn`}>
          <div className={Styles.OrderInfo}>
            <h2 className="title">Resumen de compra</h2>

            <section>
              {Object.keys(totalData).map((key) => {
                const { label, value } = totalData[key];
                if (value === 0) return null;
                return (
                  <div
                    key={key}
                    className={`${Styles.OrderSummaryItem} ${
                      key === "total" ? Styles.Total : ""
                    }`}
                  >
                    <span>{label}:</span>
                    <span>{format.formatPrice(value)}</span>
                  </div>
                );
              })}
            </section>

            <section>
              <p className={Styles.ContentInfoDeliveryDate}>
                Su pedido será entregado el próximo{" "}
                {moment(deliveryDate).format("DD/MM/YYYY")}
              </p>
            </section>

            {total <= MIN_SHIPPING_VALUE && (
              <MinShippingValue minValue={MIN_SHIPPING_VALUE} />
            )}
          </div>

          <div className={Styles.OrderActions}>
            {total > MIN_SHIPPING_VALUE && (
              <Button label="Realizar pedido" onClick={onToggleIsCheckout} />
            )}
          </div>
        </div>
      )}

      {/* Confirmar pedido */}
      {total > MIN_SHIPPING_VALUE && isCheckout && (
        <Checkout onBack={onToggleIsCheckout} />
      )}
    </div>
  );
};
