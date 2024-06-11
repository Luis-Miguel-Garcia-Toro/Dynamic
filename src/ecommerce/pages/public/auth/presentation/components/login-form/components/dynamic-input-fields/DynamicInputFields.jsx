import { InputCode, InputField } from "@/common/presentation/components";
import { authenticationMethods } from "@/ecommerce/common/domain";
import PropTypes from "prop-types";
import { FiUser } from "react-icons/fi";
import { RiKey2Line } from "react-icons/ri";

export const DynamicInputFields = ({
  authMethod,
  errors,
  form,
  onChangeForm,
  step,
}) => {
  switch (authMethod) {
    case authenticationMethods.USER_PASSWORD:
      return (
        <UserPasswordFields
          errors={errors}
          form={form}
          onChangeForm={onChangeForm}
        />
      );
    case authenticationMethods.CODE:
      return (
        <CodeField errors={errors} form={form} onChangeForm={onChangeForm} />
      );
    case authenticationMethods.USER_PASSWORD_CODE:
      return (
        <UserPasswordCodeFields
          errors={errors}
          form={form}
          onChangeForm={onChangeForm}
          step={step}
        />
      );
    default:
      return null;
  }
};

DynamicInputFields.propTypes = {
  authMethod: PropTypes.oneOf(Object.values(authenticationMethods)).isRequired,
  errors: PropTypes.object,
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

const UserPasswordFields = ({ form, onChangeForm, errors }) => (
  <>
    <InputField
      error={errors?.username}
      value={form.username}
      onChange={(value) => onChangeForm(value, "username")}
      name="username"
      label="Usuario"
      icon={<FiUser />}
    />
    <InputField
      error={errors?.password}
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
  errors: PropTypes.object,
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
};

const CodeField = ({ form, onChangeForm, errors }) => {
  return (
    <InputCode
      error={errors?.code}
      label="Código"
      code={form.code}
      onChangeCode={(value) => onChangeForm(value, "code")}
    />
  );
};

CodeField.propTypes = {
  errors: PropTypes.object,
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
};

const UserPasswordCodeFields = ({ form, onChangeForm, step, errors }) => {
  return (
    <>
      {step === 1 ? (
        <UserPasswordFields
          form={form}
          onChangeForm={onChangeForm}
          errors={errors}
        />
      ) : (
        <CodeField form={form} onChangeForm={onChangeForm} errors={errors} />
      )}
    </>
  );
};

UserPasswordCodeFields.propTypes = {
  errors: PropTypes.object,
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};
