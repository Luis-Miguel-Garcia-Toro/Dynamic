import es from "date-fns/locale/es"
import moment from "moment"
import "moment/locale/es"
import React, { useState } from "react"
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import * as FontAwesome from "react-icons/fa"
import { InputField } from "../../../../../../../common/presentation/components"
import { Button } from "../../../../../../../common/presentation/components/ui/button/Button"
import { format } from "../../../../../../../common/presentation/utils"
import { useEcommerceStore } from "../../../../../../common/infrastructure/store"
import { useCartPage } from "../../view-model/useCartPage"
import Styles from "./scss/order-summary.module.scss"
import ResultOrder from "../result-order/result"
registerLocale("es", es);

export const OrderSummary = ({ checkout, changeCheckout }) => {
  const {
    observation,
    setObservation,
    updateFechaEntrega,
    filterDate,
    startDate,
    dataUser,
    fechaEntrega,
    sendOrder,
    finishOrder,
    setFinishOrder
  } = useCartPage();
  const { subtotal, Iva, impAzucarados, total, ultraProcesados } =
    useEcommerceStore((state) => state.getSummaryInformation());
  const { configPages } = useEcommerceStore();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <React.Fragment>
      {finishOrder.length > 0 ? (
        <ResultOrder finishOrder={finishOrder} setFinishOrder={setFinishOrder} total={total} />
      ) : (
        <div className={`${Styles.OrderSummaryContainer} fadeIn`}>
          <h2 className="title">Resumen de compra</h2>

          <div className={Styles.OrderSummaryItem}>
            <span>Subtotal : </span>
            <span>{format.formatPrice(subtotal)}</span>
          </div>

          <div className={Styles.OrderSummaryItem}>
            <span>Iva :</span>
            <span>{format.formatDecimalPrice(Iva)}</span>
          </div>

          {impAzucarados > 0 && (
            <div className={Styles.OrderSummaryItem}>
              <span>Imp. Azucarados :</span>
              <span>{format.formatDecimalPrice(impAzucarados)}</span>
            </div>
          )}

          {ultraProcesados > 0 && (
            <div className={Styles.OrderSummaryItem}>
              <span>Imp. Azucarados :</span>
              <span>{format.formatDecimalPrice(ultraProcesados)}</span>
            </div>
          )}

          <div className={`${Styles.OrderSummaryItem} ${Styles.Total}`}>
            <span>Total</span>
            <span>{format.formatPrice(total)}</span>
          </div>

          <p
            className={`${Styles.ContentInfoDeliveryDate} ${Styles.infoDeliveryDate}`}
          >
            Su pedido será entregado el próximo {moment(fechaEntrega).format("DD/MM/YYYY")}
          </p>

          <div className={Styles.OrderSummarySeparator} />
          {total > 20000 ? (
            <>
              {checkout ? (
                <div
                  className={`${Styles.OrderSummaryData} ${isOpen ? Styles.IsOpenCalendar : ""
                    }`}
                >
                  <div className={Styles.OrderSummaryDataItem}>
                    <p className="opc">Dirección:</p>
                    <p>{dataUser.main_address}</p>
                  </div>
                  {configPages.activateDateDelivery === 1 && (
                    <div
                      className={`${Styles.OrderSummaryDataItem} ${Styles.DateDelivery}`}
                    >
                      <p>Fecha de entrega:</p>
                      <Button
                        onClick={() => setIsOpen(!isOpen)}
                        label={moment(fechaEntrega).format("DD/MM/YYYY")}
                      />
                    </div>
                  )}

                  {isOpen && (
                    <div className="Calendar-Order">
                      <DatePicker
                        locale="es"
                        selected={startDate}
                        onChange={(date) => {
                          setIsOpen(!isOpen);
                          // setStartDate(date);
                          updateFechaEntrega(moment(date));
                        }}
                        dateFormat="dd/MM/yyyy"
                        minDate={startDate}
                        filterDate={filterDate}
                        // maxDate={maxCalendar}
                        inline
                      />
                    </div>
                  )}
                  <div className={Styles.OrderSummaryDataItem}>
                    <p className="opc">Método de pago:</p>
                    <div className={Styles.PaymentMethodsGrid}>
                      {configPages.payment_methods.map((item, i) => (
                        <div key={i} className={Styles.PaymentMethodsItem}>
                          <div style={{ color: item.title == 'Efectivo' ? 'green' : 'orange' }}>
                            {React.createElement(
                              FontAwesome[
                              item.title == "Efectivo"
                                ? "FaDollarSign"
                                : "FaRegCreditCard"
                              ]
                            )}
                          </div>
                          <p>{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={Styles.OrderSummaryDataItem}>
                    <InputField
                      label="Observaciones"
                      value={observation}
                      name="observation"
                      onChange={(value) => setObservation(value)}
                      type="text"
                    />
                  </div>
                </div>
              ) : null}
              <Button label="Realizar pedido" onClick={() => checkout == false ? changeCheckout(true) : sendOrder(total)} />
            </>
          ) : (
            <div style={{ marginTop: "1rem" }}>
              <p style={{ color: "red" }}>
                <b>
                  El valor mínimo de envío es de
                  {" $" +
                    new Intl.NumberFormat("es-CO", {
                      style: "decimal",
                      currency: "COP",
                    }).format(20000)}
                </b>
              </p>
              <p>Completa tu pedido para que disfrutes todos nuestros productos</p>
            </div>
          )}
        </div>
      )}
    </ React.Fragment>
  );
};
