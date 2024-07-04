import PropTypes from "prop-types";
import {
  Button,
  InputCode,
} from "../../../../../../../common/presentation/components";
import Styles from "./scss/code-recover-password.module.scss";
import { useCodeRecoverPassword } from "./view-model/useCodeRecoverPassword";

export const CodeRecoverPassword = ({ onChangeCurrentScreen }) => {
  const {
    code,
    errorCodeMessage,
    isFetchingValidateCode,
    onChangeCode,
    validateCode,
  } = useCodeRecoverPassword({
    onChangeCurrentScreen,
  });

  return (
    <div>
      <div className={Styles.CodeRecoverPassword}>
        <div>
          <h2>Confirmar código</h2>
          <p>
            Ingresa tu código de verificación para restablecer tu contraseña.
          </p>
        </div>
        <form onSubmit={validateCode}>
          <InputCode
            error={errorCodeMessage}
            code={code}
            onChangeCode={onChangeCode}
            label="Código"
          />
          <Button
            loading={isFetchingValidateCode}
            label="Validar código"
            onClick={validateCode}
          />
          <Button
            label="Cancelar"
            color="flat-primary"
            onClick={() => onChangeCurrentScreen("recover")}
          />
        </form>
      </div>
    </div>
  );
};

CodeRecoverPassword.propTypes = {
  onChangeCurrentScreen: PropTypes.func,
};
