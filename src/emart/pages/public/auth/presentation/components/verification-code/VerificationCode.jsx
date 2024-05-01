import { InputCode } from "@/common/presentation/components/ui/input-code/InputCode";
import PropTypes from "prop-types";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { StepScreenLayout } from "../subcomponents";

export const VerificationCode = ({ nextStep, backStep }) => {
  return (
    <StepScreenLayout
      description="Ingresa el código que te hemos enviado para continuar."
      title="Verificar Código"
      icon={<MdOutlineVerifiedUser />}
      onNext={nextStep}
      onBack={backStep}
    >
      <InputCode code="123456" onChangeCode={() => {}} />
    </StepScreenLayout>
  );
};

VerificationCode.propTypes = {
  nextStep: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
};
