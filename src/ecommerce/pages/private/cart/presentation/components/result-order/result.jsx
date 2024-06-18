import { useNavigate } from "react-router-dom"
import { format } from "../../../../../../../../src/common/presentation/utils"
import errors from "../../../../../../../assets/img/error.svg"
import success from "../../../../../../../assets/img/success.svg"
import { Button } from "../../../../../../../common/presentation/components"
import { useEcommerceStore } from "../../../../../../common/infrastructure/store"
import Styles from "./scss/result-order.module.scss"

const ResultOrder = () => {
  const { orderResult: order, resetOrder, clearCart } = useEcommerceStore();
  const navigate = useNavigate();

  if (!order) return null;

  const onAccept = () => {
    resetOrder();
    clearCart();

    navigate("/");
  };

  return (
    <div className={Styles.OrderResult}>
      <section className={Styles.OrderResultImage}>
        <figure className="fadeIn">
          <img src={order.status === "error" ? errors : success} />
        </figure>
      </section>

      {order.status === "error" ? (
        <section className={`${Styles.OrderResultContent} fadeIn`}>
          <h2>Ocurrió un error!</h2>
          <div className={Styles.OrderId}>
            <p>Pedido </p>
            <p>N° {order.orderId}</p>
          </div>
          <p className={Styles.OrderResultMessage}>
            Lo sentimos ocurrió un error al procesar tu pedido. Por favor,
            intente de nuevo más tarde.
          </p>
        </section>
      ) : (
        <section className={`${Styles.OrderResultContent} fadeIn`}>
          <h2>Gracias por tu compra!</h2>
          <div className={Styles.OrderId}>
            <p>Pedido </p>
            <p>N° {order.orderId}</p>
          </div>
          <p className={Styles.OrderResultMessage}>
            Su pedido por valor de <b>{format.formatPrice(order.total)}</b> se
            encuentra en proceso de Alistamiento. Una vez quede procesado se
            enviará su factura electrónica de Pedido.
          </p>
        </section>
      )}

      <Button className="fadeIn" label="Aceptar" onClick={onAccept} />
    </div>
  );
};

export default ResultOrder;
