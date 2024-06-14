import PropTypes from "prop-types";
import Styles from "./scss/button.module.scss";
import { colorsAvailable, useButton } from "./view-model/useButton";

export const Button = ({
  className,
  color,
  customBackgroundColor,
  customColorText,
  label,
  onClick,
  type,
  disabled,
}) => {
  const { backgroundColor, textColor } = useButton({
    color,
    customBackgroundColor,
    customColorText,
  });

  return (
    <div className={`${className ? className : ""} ${Styles.ButtonContainer}`}>
      <button
        disabled={disabled}
        onClick={onClick}
        style={{
          backgroundColor,
          color: textColor,
        }}
        type={type}
      >
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colorsAvailable)),
  customBackgroundColor: PropTypes.string,
  customColorText: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: undefined,
  color: "primary",
  type: "button",
};
