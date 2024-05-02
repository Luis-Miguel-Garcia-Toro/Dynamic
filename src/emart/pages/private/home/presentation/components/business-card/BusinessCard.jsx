import PropTypes from "prop-types";
import { IoIosArrowRoundForward } from "react-icons/io";
import Styles from "./scss/business-card.module.scss";

export const BusinessCard = ({ business }) => {
  const {
    comercial_name,
    logo,
    business: code,
    primary_color,
    organization,
  } = business;

  return (
    <div className={Styles.BusinessCardContainer}>
      <figure>
        <img src={logo} alt={comercial_name} />
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
};
