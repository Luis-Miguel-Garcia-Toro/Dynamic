import { InputField } from "@/common/presentation/components";
import { FaRegAddressCard } from "react-icons/fa6";
import { StepScreenLayout } from "../subcomponents";
import { useNitEntry } from "./view-model";

export const NitEntry = () => {
  const { onChangeNit, nit, errorNitField, onNextStep, isPendingMutation } =
    useNitEntry();

  return (
    <StepScreenLayout
      isLoading={isPendingMutation}
      icon={<FaRegAddressCard />}
      description="Por favor, ingresa un NIT para continuar."
      title="Ingresar"
      onNext={onNextStep}
    >
      <InputField
        error={errorNitField}
        label="Nit"
        name="nit"
        onChange={onChangeNit}
        value={nit}
      />
    </StepScreenLayout>
  );
};
