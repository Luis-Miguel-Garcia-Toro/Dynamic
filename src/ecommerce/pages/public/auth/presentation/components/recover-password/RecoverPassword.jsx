import PropTypes from "prop-types";
import {
  Button,
  InputField,
} from "../../../../../../../common/presentation/components";
import Styles from "./scss/recover-password.module.scss";
import { useRecoverPassword } from "./view-model/useRecoverPassword";

export const RecoverPassword = ({ onChangeCurrentScreen }) => {
  const {
    generateCode,
    identification,
    identificationErrorMessage,
    isFetchingGenerateCode,
    onChangeIdentification,
  } = useRecoverPassword({ onChangeCurrentScreen });

  return (
    <div className={Styles.RecoverPassword}>
      <div>
        <h2>Recuperar contraseña</h2>
        <p>
          Por favor, introduce tu número de identificación a continuación para
          generar un código de recuperación de contraseña.
        </p>
      </div>
      <form onSubmit={generateCode}>
        <InputField
          value={identification}
          onChange={onChangeIdentification}
          name="identification"
          label="Identificación"
          error={identificationErrorMessage}
        />
        <Button
          type="button"
          loading={isFetchingGenerateCode}
          label="Generar código"
          onClick={generateCode}
        />
        <Button
          type="button"
          label="Cancelar"
          color="flat-primary"
          onClick={() => onChangeCurrentScreen("login")}
        />
      </form>
    </div>
  );
};

RecoverPassword.propTypes = {
  onChangeCurrentScreen: PropTypes.func,
};
