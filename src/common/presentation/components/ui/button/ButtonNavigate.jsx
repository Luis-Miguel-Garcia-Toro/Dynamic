import PropTypes from "prop-types";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import Styles from "./scss/button-navigate.module.scss";

export const ButtonNavigate = ({
  navigateTo,
  color,
  iconPosition,
  text,
  iconSize,
}) => {
  return (
    <button className={Styles.ButtonNavigate} onClick={navigateTo}>
      {iconPosition === "left" && <IoArrowBack size={iconSize} color={color} />}

      <span
        style={{
          color,
        }}
      >
        {text}
      </span>

      {iconPosition === "right" && (
        <IoMdArrowForward size={iconSize} color={color} />
      )}
    </button>
  );
};

ButtonNavigate.propTypes = {
  color: PropTypes.string.isRequired,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  navigateTo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
};

ButtonNavigate.defaultProps = {
  iconPosition: "left",
  iconSize: 20,
};
