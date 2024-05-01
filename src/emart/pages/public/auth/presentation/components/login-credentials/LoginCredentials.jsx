import { InputField } from "@/common/presentation/components";
import { IoIosLogIn } from "react-icons/io";
import { StepScreenLayout } from "../subcomponents";
import { useLoginCredentials } from "./view-model/useLoginCredentials";

export const LoginCredentials = () => {
  const {
    form,
    formErrors,
    hasPassword,
    isPendingLogin,
    onChangeFieldForm,
    onNextStep,
    prevStep,
    isPendingCreatePass,
  } = useLoginCredentials();

  return (
    <StepScreenLayout
      description={
        hasPassword
          ? "Accede con tu número de nit y contraseña."
          : "Antes de iniciar sesión, necesitas establecer una contraseña para tu cuenta."
      }
      icon={<IoIosLogIn />}
      title={hasPassword ? "Iniciar sesión" : "Establecer contraseña"}
      onNext={onNextStep}
      onBack={prevStep}
      isLoading={isPendingLogin || isPendingCreatePass}
    >
      {hasPassword ? (
        <div>
          <InputField
            label="Nit"
            name="nit"
            onChange={(value) => onChangeFieldForm(value, "nit")}
            value={form.nit}
            error={formErrors.nit}
          />
          <InputField
            type="password"
            label="Contraseña"
            name="password"
            onChange={(value) => onChangeFieldForm(value, "password")}
            value={form.password}
            error={formErrors.password}
          />
        </div>
      ) : (
        <div>
          <InputField
            type="password"
            label="Nueva contraseña"
            name="newPassword"
            onChange={(value) => onChangeFieldForm(value, "newPassword")}
            value={form.newPassword}
            error={formErrors.newPassword}
          />
          <InputField
            type="password"
            label="Confirmar contraseña"
            name="newPassword2"
            onChange={(value) => onChangeFieldForm(value, "newPassword2")}
            value={form.newPassword2}
            error={formErrors.newPassword2}
          />
        </div>
      )}
    </StepScreenLayout>
  );
};
