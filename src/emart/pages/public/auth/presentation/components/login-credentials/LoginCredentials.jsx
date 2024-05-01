import { InputField } from "@/common/presentation/components";
import PropTypes from "prop-types";
import { IoIosLogIn } from "react-icons/io";
import { StepScreenLayout } from "../subcomponents";

export const LoginCredentials = ({ backStep }) => {
  return (
    <StepScreenLayout
      description="Inicia sesión con tu usuario y contraseña"
      icon={<IoIosLogIn />}
      title="Iniciar sesión"
      onNext={() => {}}
      onBack={backStep}
    >
      <div>
        <InputField label="Usuario" name="user" onChange={() => {}} value="" />
        <InputField
          type="password"
          label="Contraseña"
          name="password"
          onChange={() => {}}
          value=""
        />
      </div>
    </StepScreenLayout>
  );
};

LoginCredentials.propTypes = {
  backStep: PropTypes.func.isRequired,
};
