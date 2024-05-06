import { GoPasskeyFill } from "react-icons/go";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { authMethods as authMethodsTypes } from "../../../../../../../../common/domain";
import { StepScreenLayout } from "../../../subcomponents";
import Styles from "./scss/auth-method-selection.module.scss";
import { useAuthMethodSelection } from "./view-model";

const authMethods = [
  {
    id: 1,
    name: "Usuario y contraseña",
    description: "Iniciar sesión con un usuario y contraseña.",
    icon: <TbPasswordUser />,
    value: authMethodsTypes.PASSWORD,
  },
  {
    id: 2,
    name: "Código SMS",
    description: "Iniciar sesión con un código enviado a tu teléfono.",
    icon: <MdOutlineTextsms />,
    value: authMethodsTypes.CODE,
  },
];

export const AuthMethodSelection = () => {
  const { onPrevStep, onSelectedAuthMethod } = useAuthMethodSelection();

  return (
    <StepScreenLayout
      description="Selecciona el método por el cual deseas iniciar sesión."
      icon={<GoPasskeyFill />}
      title="Método de inicio de sesión"
      onBack={onPrevStep}
    >
      <div className={Styles.AuthMethodSelectionContainer}>
        <div className={Styles.AuthMethodSelectionList}>
          {authMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => onSelectedAuthMethod(method.value)}
              className={Styles.AuthMethodSelectionItem}
            >
              <div className={Styles.AuthMethodSelectionItemIcon}>
                {method.icon}
                <div className={Styles.AuthMethodSelectionItemText}>
                  <span>{method.name}</span>
                  <span>{method.description}</span>
                </div>
              </div>

              <div className={Styles.AuthMethodSelectionItemArrow}>
                <IoArrowForwardOutline />
              </div>
            </div>
          ))}
        </div>
      </div>
    </StepScreenLayout>
  );
};
