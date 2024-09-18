import PropTypes from "prop-types";
import { ImageLazy } from "../../../../../../../common/presentation/components";
import Styles from "./scss/business-card.module.scss";

export const BusinessCardFactura = ({ business }) => {
  const { comercial_name, logo, organization } = business;
  console.log(logo, "De aqui me saco los logos");
  return (
    <div
      onClick={() => console.log("traer facturas del sitio")}
      className={`${Styles.BusinessCardContainer} fadeIn`}
    >
      <figure>
        <ImageLazy imageUri={logo} />
      </figure>

      <h2>{comercial_name ? comercial_name : organization}</h2>
    </div>
  );
};

BusinessCardFactura.propTypes = {
  business: PropTypes.object.isRequired,
  navigateTo: PropTypes.func.isRequired,
};
