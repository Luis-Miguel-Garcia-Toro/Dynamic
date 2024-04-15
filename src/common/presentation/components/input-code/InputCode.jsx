import PropTypes from "prop-types";
import VerificationInput from "react-verification-input";
// import Styles from "./input-code.module.scss";
import "./input-code.scss";

export const InputCode = ({ code, onChangeCode, length, label }) => {
  return (
    <div className="InputCodeContainer">
      <label>{label}</label>
      <VerificationInput
        length={length}
        value={code}
        onChange={onChangeCode}
        classNames={{
          character: "character",
        }}
        validChars="0-9"
        inputProps={{ inputMode: "numeric" }}
      />
    </div>
  );
};

InputCode.propTypes = {
  code: PropTypes.string.isRequired,
  label: PropTypes.string,
  length: PropTypes.number,
  onChangeCode: PropTypes.func.isRequired,
};

InputCode.defaultProps = {
  length: 6,
};
