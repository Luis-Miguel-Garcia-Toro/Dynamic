import { authenticationMethods } from "@/common/infrastructure/store/types";
import { InputCode, InputField } from "@/common/presentation/components";
import PropTypes from "prop-types";
import { FiUser } from "react-icons/fi";
import { RiKey2Line } from "react-icons/ri";

export const DynamicInputFields = ({ authMethod, form, onChangeForm }) => {
  switch (authMethod) {
    case authenticationMethods.USER_PASSWORD:
      return <UserPasswordFields form={form} onChangeForm={onChangeForm} />;
    case authenticationMethods.CODE:
      return <CodeField form={form} onChangeForm={onChangeForm} />;
    case authenticationMethods.USER_PASSWORD_CODE:
      return <UserPasswordCodeFields form={form} onChangeForm={onChangeForm} />;
    default:
      return null;
  }
};

DynamicInputFields.propTypes = {
  authMethod: PropTypes.oneOf(Object.values(authenticationMethods)).isRequired,
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
};

const UserPasswordFields = ({ form, onChangeForm }) => (
  <>
    <InputField
      value={form.username}
      onChange={(value) => onChangeForm(value, "username")}
      name="username"
      label="Usuario"
      icon={<FiUser />}
    />
    <InputField
      value={form.password}
      onChange={(value) => onChangeForm(value, "password")}
      name="password"
      label="Contraseña"
      type="password"
      icon={<RiKey2Line />}
    />
  </>
);

UserPasswordFields.propTypes = {
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
};

const CodeField = ({ form, onChangeForm }) => (
  <InputCode
    label="Código"
    code={form.code}
    onChangeCode={(value) => onChangeForm(value, "code")}
  />
);

CodeField.propTypes = {
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
};

const UserPasswordCodeFields = ({ form, onChangeForm }) => {
  return (
    <>
      <UserPasswordFields form={form} onChangeForm={onChangeForm} />
      <CodeField form={form} onChangeForm={onChangeForm} />
    </>
  );
};

UserPasswordCodeFields.propTypes = {
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
};
