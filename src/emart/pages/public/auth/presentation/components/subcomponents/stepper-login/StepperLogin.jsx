import Logo from "@/assets/img/logo-cw-white.png";
import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
import Styles from "./scss/stepper-login.module.scss";

export const StepperLogin = ({ currentStep, stepsList }) => {
  return (
    <div className={Styles.StepperLoginContainer}>
      <figure className={Styles.StepperLoginLogoContainer}>
        <img src={Logo} alt="logo cw" />
      </figure>

      <div className={Styles.StepperLoginSteps}>
        {stepsList.map(({ key, label }, index) => {
          const isActive = currentStep === index + 1;
          const isCompleted = currentStep >= index + 1;

          return (
            <div
              className={`${Styles.StepperLoginStep} ${
                isActive ? Styles.StepActive : ""
              } ${isCompleted ? Styles.StepCompleted : ""}`}
              key={key}
            >
              <div className={Styles.StepperLoginLine} />
              <div className={Styles.StepperLoginStepIndicator}>
                <FaCheckCircle />
              </div>
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

StepperLogin.propTypes = {
  currentStep: PropTypes.number,
  stepsList: PropTypes.array,
};

StepperLogin.defaultProps = {
  currentStep: 1,
  stepsList: [],
};
