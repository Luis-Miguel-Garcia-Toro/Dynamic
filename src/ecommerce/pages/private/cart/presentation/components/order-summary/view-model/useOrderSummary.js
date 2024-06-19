import moment from "moment"
import { useEffect, useMemo } from "react"
import { useAppStore } from "../../../../../../../../common/infrastructure/store/app.store"
import { useEcommerceStore } from "../../../../../../../common/infrastructure/store"

const MIN_SHIPPING_VALUE = 20000;

export const useOrderSummary = () => {
  const { user } = useAppStore();
  const { subtotal, Iva, impAzucarados, total, ultraProcesados } =
    useEcommerceStore((state) => state.getSummaryInformation());
  const { deliveryDate, setDeliveryDate, isCheckout, toggleIsCheckout } =
    useEcommerceStore();

  const totalData = useMemo(() => {
    return {
      subtotal: {
        value: subtotal,
        label: "Subtotal",
      },
      iva: {
        value: Iva,
        label: "Iva",
      },
      sugarTax: {
        value: impAzucarados,
        label: "Imp. Azucarados",
      },
      ultraProcessedFood: {
        value: ultraProcesados,
        label: "Imp. Ultra Procesados",
      },
      total: {
        value: total,
        label: "Total",
      },
    };
  }, [subtotal, Iva, impAzucarados, total, ultraProcesados]);

  const getDateDelivery = () => {
    let BaseDate = new Date();
    let resultDay = "";
    let dataOrigen = user.delivery_area;
    let dataOrigenFinish = dataOrigen + dataOrigen;
    let actualDate = new Date();
    let diaActual = actualDate.getDay();
    if (actualDate.getHours() > 17) {
      for (let i = diaActual + 1; i < dataOrigenFinish.length; i++) {
        if (dataOrigenFinish[i] == 1) {
          resultDay = i;
          break;
        }
      }
    } else {
      for (let i = diaActual; i < dataOrigenFinish.length; i++) {
        if (dataOrigenFinish[i] == 1) {
          resultDay = i;
          break;
        }
      }
    }
    BaseDate.setDate(BaseDate.getDate() + resultDay - diaActual + 1);
    setDeliveryDate(moment(BaseDate));
  };

  useEffect(() => {
    getDateDelivery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    deliveryDate,
    isCheckout,
    MIN_SHIPPING_VALUE,
    toggleIsCheckout,
    total,
    totalData,
  };
};
