import { motion } from "framer-motion";
import Styles from "../scss/statusPayment.module.scss";
import { useEffect } from "react";
import { format } from "../../../../../../common/presentation/utils";
import moment from "moment";
import { useContextWallet } from "../../../../../context/ContextWallet";

const StatusPaymentWompy = ({ dataPayment }) => {
  const { idLastPayment } = useContextWallet();

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    console.log(dataPayment);
  }, [dataPayment]);

  return (
    <div className={Styles.container}>
      <div className={Styles.containerWompy}>
        {dataPayment.status === "OK" ? (
          <>
            <h1>Pago Exitoso</h1>
          </>
        ) : (
          <>
            <h1>Pago Rechazado</h1>
          </>
        )}

        <div className={Styles.resumePay}>
          <h2>Resumen de transacción</h2>
          <br />
          <label>
            <p className={Styles.title}>Fecha :</p>
            <p className={Styles.value}>
              {moment(dataPayment.customer_transaction_transactionDate).format(
                "DD-MM-YYYY HH:mm"
              )}
            </p>
          </label>
          <label>
            <p className={Styles.title}>Valor :</p>
            <p className={Styles.value}>
              {format.formatPrice(dataPayment.customer_transaction_amount)}
            </p>
          </label>
          <label>
            <p className={Styles.title}>Medio de pago :</p>
            <p className={Styles.value}>{dataPayment.wallet}</p>
          </label>
          <label>
            <p className={Styles.title}>Método :</p>
            <h5>
              <p className={Styles.value}>{dataPayment.payment_method}</p>
            </h5>
          </label>
        </div>

        <div className={Styles.containerButton}>
          <button onClick={() => window.location.replace("/home")}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusPaymentWompy;
