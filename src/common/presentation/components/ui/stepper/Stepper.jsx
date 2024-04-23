import PropTypes from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import Styles from "./scss/stepper.module.scss";

export const Stepper = ({ steps, currentStep, onBack }) => {
  return (
    <div className={Styles.StepperContainer}>
      <button className={Styles.StepperButton} type="button" onClick={onBack}>
        <IoArrowBack />
      </button>

      <span className={Styles.StepperText}>
        Paso {currentStep} de {steps}
      </span>
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.number,
  currentStep: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};

Stepper.defaultProps = {
  steps: 1,
  currentStep: 1,
};
