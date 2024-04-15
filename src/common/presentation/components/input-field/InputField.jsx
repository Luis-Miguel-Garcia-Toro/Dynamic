import PropTypes from "prop-types";
import { useState } from "react";
import Styles from "./input-field.module.scss";

import { VscEye, VscEyeClosed } from "react-icons/vsc";

export const InputField = ({
  className,
  icon,
  label,
  name,
  onChange,
  type,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isFieldTypePassword = type === "password";

  const onChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`${className ? className : ""} ${Styles.InputFieldContainer}`}
    >
      <label htmlFor="" className={Styles.Label}>
        {label}
      </label>

      <div className={Styles.InputContainer}>
        <input
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={showPassword ? "text" : type}
          className={`${Styles.Input} ${icon ? Styles.HasIcon : ""}`}
        />

        {icon && (
          <span className={`${Styles.Icon} ${Styles.IconCustom}`}>{icon}</span>
        )}

        {isFieldTypePassword && (
          <>
            {showPassword ? (
              <VscEye
                className={`${Styles.Icon} ${Styles.IconShowPassword}`}
                onClick={onChangeShowPassword}
              />
            ) : (
              <VscEyeClosed
                className={`${Styles.Icon} ${Styles.IconShowPassword}`}
                onClick={onChangeShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  icon: PropTypes.element,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  type: "text",
  className: undefined,
};
