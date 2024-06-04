import PropTypes from "prop-types";
import { ImageLazy } from "../../../../../../../common/presentation/components";
import Styles from "./scss/business-card.module.scss";

export const BusinessCard = ({ business, navigateTo }) => {
  const { comercial_name, logo, organization } = business;

  return (
    <div
      onClick={() => navigateTo(business)}
      className={`${Styles.BusinessCardContainer} fadeIn`}
    >
      <figure>
        <ImageLazy imageUri={logo} />
      </figure>

      <h2>{comercial_name ? comercial_name : organization}</h2>
    </div>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.object.isRequired,
  navigateTo: PropTypes.func.isRequired,
};
