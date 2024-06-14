import { Button, Stepper } from "@/common/presentation/components";
import { DynamicInputFields } from "./components";
import { useLoginForm } from "./view-model/useLoginForm";

export const LoginForm = () => {
  const {
    authMethod,
    form,
    formErrors,
    isActiveSteps,
    isLastStep,
    isPendingCode,
    isPendingValidateCode,
    onChangeForm,
    onPrevStep,
    onSubmit,
    step,
    totalSteps,
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
          errors={formErrors}
          onChangeForm={onChangeForm}
          step={step}
        />
        {/* TODO: Implementar loading spinner */}
        <Button
          disabled={isPendingCode || isPendingValidateCode}
          onClick={onSubmit}
          label={isLastStep ? "Iniciar sesión" : "Continuar"}
        />
      </form>
    </div>
  );
};
