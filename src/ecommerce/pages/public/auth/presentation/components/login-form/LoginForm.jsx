import { Button, Stepper } from "@/common/presentation/components";
import { ChangePassword, CodeRecoverPassword, RecoverPassword } from "../index";
import { DynamicInputFields } from "./components";
import Styles from "./scss/login-form.module.scss";
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
    currentScreen,
    onChangeCurrentScreen,
  } = useLoginForm();

  const optionsScreens = {
    recover: <RecoverPassword onChangeCurrentScreen={onChangeCurrentScreen} />,
    code: <CodeRecoverPassword onChangeCurrentScreen={onChangeCurrentScreen} />,
    change: <ChangePassword onChangeCurrentScreen={onChangeCurrentScreen} />,
  };

  return (
    <div>
      {currentScreen === "login" && (
        <>
          {isActiveSteps && (
            <Stepper
              currentStep={step}
              steps={totalSteps}
              onBack={onPrevStep}
            />
          )}

          <form onSubmit={onSubmit}>
            <DynamicInputFields
              authMethod={authMethod}
              form={form}
              errors={formErrors}
              onChangeForm={onChangeForm}
              step={step}
            />
            {/* TODO: Implementar loading spinner */}
            <Button
              loading={isPendingCode || isPendingValidateCode}
              disabled={isPendingCode || isPendingValidateCode}
              onClick={onSubmit}
              label={isLastStep ? "Iniciar sesión" : "Continuar"}
            />
            {step === 1 && (
              <Button
                onClick={() => onChangeCurrentScreen("recover")}
                className={Styles.ButtonRecoverPassword}
                color="flat-primary"
                label="¿Olvidaste tu contraseña?"
              />
            )}
          </form>
        </>
      )}

      {optionsScreens[currentScreen]}
    </div>
  );
};
