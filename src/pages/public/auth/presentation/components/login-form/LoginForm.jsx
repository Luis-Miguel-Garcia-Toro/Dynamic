import { Button } from "@/common/presentation/components";
import { DynamicInputFields } from "./dynamic-input-fields/DynamicInputFields";
import { useLoginForm } from "./useLoginForm";

export const LoginForm = () => {
  const { authMethod, form, onChangeForm } = useLoginForm();

  return (
    <div>
      <form>
        <DynamicInputFields
          authMethod={authMethod}
          form={form}
          onChangeForm={onChangeForm}
        />
        <Button label="Iniciar sesión" />
      </form>
    </div>
  );
};
