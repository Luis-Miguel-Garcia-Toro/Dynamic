import PropTypes from "prop-types";
import { format } from "../../../../../../../common/presentation/utils";
import Styles from "./scss/min-shipping-value.module.scss";

export const MinShippingValue = ({ minValue }) => {
  return (
    <div className={Styles.MinShippingValue}>
      <p>
        El valor mínimo de envío es de
        {format.formatPrice(minValue)}
      </p>
      <p>Completa tu pedido para que disfrutes todos nuestros productos</p>
    </div>
  );
};

MinShippingValue.propTypes = {
  minValue: PropTypes.number.isRequired,
};
