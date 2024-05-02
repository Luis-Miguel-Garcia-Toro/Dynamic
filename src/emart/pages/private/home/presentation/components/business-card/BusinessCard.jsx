import defaultImage from "@/assets/img/default_image.png";
import PropTypes from "prop-types";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Styles from "./scss/business-card.module.scss";

export const BusinessCard = ({ business, navigateTo }) => {
  const {
    comercial_name,
    logo,
    business: code,
    primary_color,
    organization,
  } = business;

  return (
    <div
      onClick={() => navigateTo(business)}
      className={`${Styles.BusinessCardContainer} fadeIn`}
    >
      <figure>
        <LazyLoadImage
          src={logo}
          alt={comercial_name}
          onError={(e) => {
            e.target.src = defaultImage;
          }}
          effect="blur"
          delayTime={500}
        />
      </figure>
      <div>
        <h2>{comercial_name}</h2>
        <span>{organization}</span>
      </div>
      <div className={Styles.BusinessCardButtonContainer}>
        <span>Código {code}</span>
        <IoIosArrowRoundForward size={40} color={primary_color} />
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.object.isRequired,
  navigateTo: PropTypes.func.isRequired,
};
