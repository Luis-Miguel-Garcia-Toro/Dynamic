import defaultImage from "@/assets/img/default_image.png";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Styles from "./scss/business-card.module.scss";

export const BusinessCard = ({ business, navigateTo }) => {
  const { comercial_name, logo, organization } = business;

  return (
    <div
      onClick={() => navigateTo(business)}
      className={`${Styles.BusinessCardContainer} fadeIn`}
    >
      <figure>
        <LazyLoadImage
          src={logo}
          alt=""
          onError={(e) => {
            e.target.src = defaultImage;
          }}
          effect="blur"
          delayTime={500}
        />
      </figure>

      <h2>
        {comercial_name ? comercial_name : organization}
      </h2>
    </div>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.object.isRequired,
  navigateTo: PropTypes.func.isRequired,
};
