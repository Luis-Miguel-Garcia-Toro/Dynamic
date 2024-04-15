import { Button, Stepper } from "@/common/presentation/components";
import { DynamicInputFields } from "./dynamic-input-fields/DynamicInputFields";
import { useLoginForm } from "./useLoginForm";

export const LoginForm = () => {
  const {
    authMethod,
    form,
    onChangeForm,
    isActiveSteps,
    isLastStep,
    onPrevStep,
    step,
    totalSteps,
    onSubmit,
  } = useLoginForm();

  return (
    <div>
      {isActiveSteps && (
        <Stepper currentStep={step} steps={totalSteps} onBack={onPrevStep} />
      )}

      <form>
        <DynamicInputFields
          authMethod={authMethod}
          form={form}
          onChangeForm={onChangeForm}
          step={step}
        />
        <Button
          onClick={onSubmit}
          label={isLastStep ? "Iniciar sesión" : "Continuar"}
        />
      </form>
    </div>
  );
};
