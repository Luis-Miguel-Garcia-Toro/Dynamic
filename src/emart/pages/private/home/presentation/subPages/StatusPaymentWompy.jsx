import { motion } from 'framer-motion';
import Styles from '../scss/statusPayment.module.scss';
import { useEffect } from 'react';
import { format } from "../../../../../../common/presentation/utils"
import moment from "moment"
import {useContextWallet} from '../../../../../context/ContextWallet'
const StatusPaymentWompy = ({ dataPayment }) => {
    const {idLastPayment} = useContextWallet()


    const variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    };

    useEffect(() => {
        console.log(dataPayment)
    }, [dataPayment])

    return (
        <div className={Styles.containerWompy}>
            {dataPayment.status === 'OK' ? (
                <>
                    <h1>Pago Exitoso</h1>
                  
                    {/* <div className={Styles.containerIcon}>
                        <motion.div
                            className="success-animation"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={variants}
                        >
                            <div className="checkmark">
                                <motion.div
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className={Styles.icon}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="green"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M1 12l5 5L23 3" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div> */}
                </>
            ) : (
                <>
                    <h1>Pago Rechazado</h1>
                    {/* <div className={Styles.containerIconError}>
                        <motion.div
                            className="success-animation"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={variants}
                        >
                            <div className="checkmark">
                                <motion.div
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className={Styles.icon}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="red"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 9v2m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                            </svg>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div> */}
                </>
            )}


            <div className={Styles.resumePay}>
                <h2>Resumen de transacción</h2>
                {/* <p>Ref.{idLastPayment}</p> */}
                <br></br>
                <label>
                    <p className={Styles.title}>Fecha :</p>
                    <p className={Styles.value}>{moment(dataPayment.customer_transaction_transactionDate).format("DD-MM-YYYY HH:mm")}</p>
                </label>
                <label>
                    <p className={Styles.title}>Valor : </p>
                    <p className={Styles.value}>{format.formatPrice(dataPayment.customer_transaction_amount)}</p>
                </label>
                <label>
                    <p className={Styles.title}>Medio de pago : </p>
                    <p className={Styles.value}>{dataPayment.wallet}</p>
                </label>
                <label>
                    <p className={Styles.title}>Metodo : </p>
                    <p className={Styles.value}>{dataPayment.payment_method}</p>
                </label>
             
            </div>
            <div className={Styles.containerButton}>
                <button onClick={() => window.location.replace("/home")}>Continuar</button>
            </div>

        </div>
    )
}

export default StatusPaymentWompy