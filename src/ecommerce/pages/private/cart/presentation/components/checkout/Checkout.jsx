import es from "date-fns/locale/es"
import moment from "moment"
import DatePicker, { registerLocale } from "react-datepicker"
import { IoCardOutline, IoCashOutline } from "react-icons/io5"
import {
  Button,
  ButtonNavigate,
  InputField,
} from "../../../../../../../common/presentation/components"
import { format } from "../../../../../../../common/presentation/utils"
import Styles from "./scss/checkout.module.scss"
import { useCheckout } from "./view-model/useCheckout"

registerLocale("es", es);

export const Checkout = () => {
  const {
    configPages,
    deliveryDate,
    filterDate,
    isOpenDatePicker,
    observation,
    onChangeObservation,
    onToggleOpenDatePicker,
    sendOrder,
    setDeliveryDate,
    startDate,
    toggleIsCheckout,
    total,
    user,
  } = useCheckout();

  return (
    <div className={Styles.Checkout}>
      <section className={Styles.CheckoutInfo}>
        <ButtonNavigate
          color="var(--color-label)"
          navigateTo={() => toggleIsCheckout()}
          text="Regresar"
        />
        <h2 className="title">Confirmar compra</h2>

        <div className={Styles.CheckoutInfoItems}>
          <div className={`${Styles.CheckoutInfoItem} ${Styles.ItemTotal}`}>
            <p>Total:</p>
            <p>{format.formatPrice(total)}</p>
          </div>

          <div className={Styles.CheckoutInfoItem}>
            <p>Dirección:</p>
            <p>{user.main_address}</p>
          </div>

          {configPages.activateDateDelivery === 1 && (
            <div className={Styles.CheckoutInfoItem}>
              <p>Fecha de entrega:</p>
              <Button
                className={Styles.DateButton}
                onClick={onToggleOpenDatePicker}
                label={moment(deliveryDate).format("DD/MM/YYYY")}
              />

              {isOpenDatePicker && (
                <div className={Styles.DatePickerContainer}>
                  <DatePicker
                    className={Styles.DatePicker}
                    locale="es"
                    selected={startDate}
                    onChange={(date) => {
                      onToggleOpenDatePicker();
                      // setStartDate(date);
                      setDeliveryDate(moment(date));
                    }}
                    dateFormat="dd/MM/yyyy"
                    minDate={startDate}
                    filterDate={filterDate}
                    // maxDate={maxCalendar}
                    inline
                  />
                </div>
              )}
            </div>
          )}

          <div className={Styles.CheckoutInfoItem}>
            <p>Método de pago:</p>
            <div className={Styles.PaymentMethodsGrid}>
              {configPages.payment_methods.map((item, i) => (
                <div key={i} className={Styles.PaymentMethodsItem}>
                  {item.title == "Efectivo" ? (
                    <IoCashOutline color="var(--color-success)" />
                  ) : (
                    <IoCardOutline color="var(--color-warning)" />
                  )}
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Styles.CheckoutInfoItem}>
            <p>Observación:</p>
            <InputField
              value={observation}
              name="observation"
              onChange={onChangeObservation}
              type="text"
            />
          </div>
        </div>
      </section>

      <section className={Styles.CheckoutButtons}>
        <Button label="Confirmar pedido" onClick={() => sendOrder(total)} />
      </section>
    </div>
  );
};
