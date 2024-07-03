import { Button, Stepper } from "@/common/presentation/components";
import {
  ChangePassword,
  CodeRecoverPassword,
  ModalFirstLogin,
  RecoverPassword,
} from "../index";
import { DynamicInputFields } from "./components";
import Styles from "./scss/login-form.module.scss";
import { useLoginForm } from "./view-model/useLoginForm";

export const LoginForm = () => {
  const {
    authMethod,
    currentScreen,
    form,
    formErrors,
    goToCreatePassword,
    isActiveSteps,
    isLastStep,
    isPendingCode,
    isPendingValidateCode,
    onChangeCurrentScreen,
    onChangeForm,
    onCloseModalFirstLogin,
    onPrevStep,
    onSubmit,
    openModalFirstLogin,
    step,
    totalSteps,
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

            <ModalFirstLogin
              open={openModalFirstLogin}
              handleClose={onCloseModalFirstLogin}
              handleOk={goToCreatePassword}
            />
          </form>
        </>
      )}

      {optionsScreens[currentScreen]}
    </div>
  );
};
