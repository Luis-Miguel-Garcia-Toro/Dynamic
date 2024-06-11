import { Button } from "../../../../../../../common/presentation/components/ui/button/Button";
import { format } from "../../../../../../../common/presentation/utils";
import {
  useEcommerceStore
} from "../../../../../../common/infrastructure/store";
import Styles from "./scss/order-summary.module.scss";

export const OrderSummary = () => {
  const { itemsInCart, total } = useEcommerceStore((state) =>
    state.getSummaryInformation()
  );

  return (
    <div className={`${Styles.OrderSummaryContainer} fadeIn`}>
      <h2 className="title">Resumen de compra</h2>
      <div className={Styles.OrderSummaryItem}>
        <span>Cantidad</span>
        <span>{itemsInCart}</span>
      </div>
      <div className={`${Styles.OrderSummaryItem} ${Styles.Total}`}>
        <span>Total</span>
        <span>{format.formatPrice(total)}</span>
      </div>

      <div className={Styles.OrderSummarySeparator} />

      <Button label="Realizar pedido" />
    </div>
  );
};
