import { Button } from "@/common/presentation/components";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import { LoadingFull } from "../../../../../../../../common/presentation/components";
import Styles from "./scss/step-screen-layout.module.scss";

export const StepScreenLayout = ({
  title,
  description,
  icon,
  children,
  onBack,
  onNext,
  isLoading,
}) => {
  return (
    <div className={`${Styles.StepLayoutContainer} fadeIn`}>
      <LoadingFull show={isLoading} />
      <div className={Styles.StepLayoutInfo}>
        <figure className={Styles.StepLayoutIconContainer}>{icon}</figure>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={Styles.StepLayoutContent}>{children}</div>
      <div className={Styles.StepLayoutButtons}>
        {onBack && (
          <Button
            className={Styles.StepButtonBack}
            label="Regresar"
            color="secondary"
            onClick={onBack}
          />
        )}
        <div>{onNext && <Button label="Continuar" onClick={onNext} />}</div>
      </div>
      <ToastContainer />
    </div>
  );
};

StepScreenLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};
