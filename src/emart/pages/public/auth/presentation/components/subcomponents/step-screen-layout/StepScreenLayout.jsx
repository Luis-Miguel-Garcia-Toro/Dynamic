import { Button } from "@/common/presentation/components";
import PropTypes from "prop-types";
import Styles from "./scss/step-screen-layout.module.scss";

export const StepScreenLayout = ({
  title,
  description,
  icon,
  children,
  onBack,
  onNext,
}) => {
  return (
    <div className={Styles.StepLayoutContainer}>
      <div className={Styles.StepLayoutInfo}>
        <figure className={Styles.StepLayoutIconContainer}>{icon}</figure>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={Styles.StepLayoutContent}>{children}</div>
      <div className={Styles.StepLayoutButtons}>
        {onBack && (
          <Button className={Styles.StepButtonBack} label="Regresar" color="secondary" onClick={onBack} />
        )}
        <div>{onNext && <Button label="Continuar" onClick={onNext} />}</div>
      </div>
    </div>
  );
};

StepScreenLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};
