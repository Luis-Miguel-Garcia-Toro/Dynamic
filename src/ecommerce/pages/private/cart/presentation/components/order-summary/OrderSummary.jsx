import React, { useState } from "react";
import { Button } from "../../../../../../../common/presentation/components/ui/button/Button";
import { format } from "../../../../../../../common/presentation/utils";
import { useEcommerceStore } from "../../../../../../common/infrastructure/store";
import Styles from "./scss/order-summary.module.scss";
import { useCartPage } from "../../view-model/useCartPage"
import * as FontAwesome from 'react-icons/fa'
import moment from "moment";
import 'moment/locale/es'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
registerLocale('es', es)

export const OrderSummary = () => {
  const { dayDelivery, setDayDelivery, observation, setObservation,
    updateFechaEntrega, filterDate, startDate, dataUser } = useCartPage()
  const { subtotal, Iva, impAzucarados, total, ultraProcesados } = useEcommerceStore((state) => state.getSummaryInformation());
  const { configPages } = useEcommerceStore()
  const [checkOut, setCheckOut] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
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

      <p className={`${Styles.ContentInfoDeliveryDate} ${Styles.infoDeliveryDate}`}>
        Su pedido será entregado el próximo {dayDelivery}
      </p>

      <div className={Styles.OrderSummarySeparator} />
      {total > 20000 ? (
        <>

          {checkOut ? (
            <>
             <div className="item" style={{ 'padding-top': '15px' }}>
          <p className="opc">Dirección:</p>
        </div>
        <div className="item" style={{ 'padding-top': '15px' }}>
          <p>{dataUser.main_address}</p>
        </div>
              {configPages.activateDateDelivery === 1 && (
                <>
                
                  <div>
                    <p >Fecha de entrega:</p>
                    <button  onClick={ (e) => (e.preventDefault(), setIsOpen(!isOpen))}>
                      {moment(startDate).format('DD/MM/YYYY')}
                    </button>
                  </div>
                </>
              )}


              {isOpen && (
                <>

                  <br></br>
                  <div className="Calendar-Order">
                    <DatePicker
                      locale="es"
                      selected={startDate}
                      onChange={(date) => {
                        setIsOpen(!isOpen)
                        setStartDate(date)
                        updateFechaEntrega(moment(date))
                      }}
                      dateFormat="dd/MM/yyyy"
                      minDate={startDate}
                      filterDate={filterDate}
                      // maxDate={maxCalendar}
                      inline
                    />
                  </div>
                </>
              )}
              <div>
                <p className="opc">Método de pago:</p>
                <div style={{ display: 'flex' }}>
                  {configPages.payment_methods.map((item, i) => (
                    <div className="valEmployed">
                      <div
                        className="card"
                      >
                        <div className="option">
                          {React.createElement(FontAwesome[item.title == 'Efectivo' ? 'FaDollarSign' : 'FaRegCreditCard'])}
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div >
                <input
                  className="input"
                  onChange={(e) => setObservation(e.target.value)}
                  placeholder="Observaciones"
                  value={observation}
                />
              </div>
            </>

          ) : null}
          <Button label="Realizar pedido" onClick={() => setCheckOut(true)} />
        </>

      ) :
        (
          <div>
            <p style={{ color: "red" }}>
              <b>
                El valor mínimo de envío es de
                {" $" + new Intl.NumberFormat("es-CO", {
                  style: "decimal",
                  currency: "COP",
                }).format(20000)}
              </b>
            </p>
            <p>
              Completa tu pedido para que disfrutes todos nuestros
              productos
            </p>
          </div>
        )}
    </div>
  );
};
