import { format } from "../../../../../../../../src/common/presentation/utils"
import errors from "../../../../../../../assets/img/error.svg"
import success from "../../../../../../../assets/img/success.svg"

const ResultOrder = () => {
  return (
    <div>
      <h1>Gracias por tu compra</h1>
      <div className="alert-icon">
        <img
          src={finishOrder === "error" ? errors : success}
          alt="icon alert"
        />
      </div>

      <div className="alert-content">
        <p className="alert-title">Pedido </p>
        <p className="alert-message">N° {finishOrder}</p>
        <p className="alert-message">
          Su pedido por valor de {format.formatPrice(total)} se encuentra en
          proceso de Alistamiento. Una vez quede procesado se enviará su factura
          electrónica de Pedido.
        </p>
        <button onClick={() => setFinishOrder("")}> Aceptar </button>
      </div>
    </div>
  );
};

export default ResultOrder;
