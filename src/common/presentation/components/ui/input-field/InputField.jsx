import PropTypes from "prop-types"
import { useState } from "react"
import Styles from "./scss/input-field.module.scss"

import { VscEye, VscEyeClosed } from "react-icons/vsc"

export const InputField = ({
  className,
  error,
  icon,
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
  inputAutocomplete,
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
      {label && (
        <label htmlFor="" className={Styles.Label}>
          {label}
        </label>
      )}

      <div className={Styles.InputContainer}>
        <input
          autoComplete={inputAutocomplete ? "on" : "off"}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={showPassword ? "text" : type}
          className={`${Styles.Input} ${icon ? Styles.HasIcon : ""} ${
            error ? Styles.HasError : ""
          }`}
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

      {error && <span className={Styles.Error}>{error}</span>}
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password"]),
  value: PropTypes.string.isRequired,
  inputAutocomplete: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  className: undefined,
  inputAutocomplete: true,
};
