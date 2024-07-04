import PropTypes from "prop-types";
import {
  Button,
  InputField,
} from "../../../../../../../common/presentation/components";
import Styles from "./scss/change-password.module.scss";
import { useChangePassword } from "./view-model/useChangePassword";

export const ChangePassword = ({ onChangeCurrentScreen }) => {
  const {
    form,
    formErrors,
    onChangeForm,
    isFetchingChangePassword,
    saveNewPassword,
  } = useChangePassword({ onChangeCurrentScreen });

  return (
    <div className={Styles.ChangePassword}>
      <div>
        <h2>Nueva contraseña</h2>
        <p>A continuación, Ingresa una nueva contraseña.</p>
      </div>
      <form onSubmit={saveNewPassword}>
        <InputField
          type="password"
          value={form.password}
          onChange={(value) => onChangeForm(value, "password")}
          name="password"
          label="Contraseña"
          error={formErrors.password}
        />
        <InputField
          type="password"
          value={form.password2}
          onChange={(value) => onChangeForm(value, "password2")}
          name="password2"
          label="Confirmar contraseña"
          error={formErrors.password2}
        />
        <Button
          loading={isFetchingChangePassword}
          label="Ingresar"
          onClick={saveNewPassword}
        />
        <Button
          label="Cancelar"
          color="flat-primary"
          onClick={() => onChangeCurrentScreen("recover")}
        />
      </form>
    </div>
  );
};

ChangePassword.propTypes = {
  onChangeCurrentScreen: PropTypes.func,
};
