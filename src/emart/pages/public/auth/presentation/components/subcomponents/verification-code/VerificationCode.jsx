import { InputCode } from "@/common/presentation/components/ui/input-code/InputCode";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { StepScreenLayout } from "../step-screen-layout/StepScreenLayout";
import { useVerificationCode } from "./view-model/useVerificationCode";

export const VerificationCode = () => {
  const { onPrevStep, code, errorInputCode, onChangeCode, onNextStep } =
    useVerificationCode();

  return (
    <StepScreenLayout
      description="Ingresa el código que te hemos enviado para seguir con el proceso."
      title="Verificar Código"
      icon={<MdOutlineVerifiedUser />}
      onNext={onNextStep}
      onBack={onPrevStep}
    >
      <InputCode
        code={code}
        onChangeCode={onChangeCode}
        error={errorInputCode}
      />
    </StepScreenLayout>
  );
};
