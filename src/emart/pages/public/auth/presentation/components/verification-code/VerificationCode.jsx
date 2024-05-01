import { InputCode } from "@/common/presentation/components/ui/input-code/InputCode";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { StepScreenLayout } from "../subcomponents";
import { useVerificationCode } from "./view-model/useVerificationCode";

export const VerificationCode = () => {
  const { prevStep, code, errorInputCode, onChangeCode, onNextStep } =
    useVerificationCode();

  return (
    <StepScreenLayout
      description="Ingresa el código que te hemos enviado para proseguir."
      title="Verificar Código"
      icon={<MdOutlineVerifiedUser />}
      onNext={onNextStep}
      onBack={prevStep}
    >
      <InputCode
        code={code}
        onChangeCode={onChangeCode}
        error={errorInputCode}
      />
    </StepScreenLayout>
  );
};
