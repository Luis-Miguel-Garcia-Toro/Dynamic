import PropTypes from "prop-types";
import VerificationInput from "react-verification-input";
import "./scss/input-code.scss";

export const InputCode = ({ code, onChangeCode, length, label, error }) => {
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

      {error && <span className="error">{error}</span>}
    </div>
  );
};

InputCode.propTypes = {
  code: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  length: PropTypes.number,
  onChangeCode: PropTypes.func.isRequired,
};

InputCode.defaultProps = {
  length: 6,
};
