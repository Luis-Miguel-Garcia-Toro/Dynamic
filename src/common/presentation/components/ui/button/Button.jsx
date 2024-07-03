import PropTypes from "prop-types";
import { LoadingEllipsis } from "../loading/LoadingEllipsis";
import Styles from "./scss/button.module.scss";
import { colorsAvailable, useButton } from "./view-model/useButton";

export const Button = ({
  className,
  color,
  customBackgroundColor,
  customColorText,
  disabled,
  label,
  loading,
  onClick,
  type,
}) => {
  const { backgroundColor, textColor, borderButton } = useButton({
    color,
    customBackgroundColor,
    customColorText,
  });

  return (
    <div className={`${className ? className : ""} ${Styles.ButtonContainer}`}>
      <button
        disabled={disabled || loading}
        onClick={onClick}
        style={{
          backgroundColor,
          color: textColor,
          border: borderButton,
        }}
        type={type}
      >
        {loading ? <LoadingEllipsis /> : label}
      </button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colorsAvailable)),
  customBackgroundColor: PropTypes.string,
  customColorText: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  className: undefined,
  color: "primary",
  loading: false,
  type: "button",
};
