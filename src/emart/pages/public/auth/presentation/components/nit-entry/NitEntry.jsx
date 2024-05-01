import { InputField } from "@/common/presentation/components";
import PropTypes from "prop-types";
import { FaRegAddressCard } from "react-icons/fa6";
import { StepScreenLayout } from "../subcomponents";

export const NitEntry = ({ nextStep }) => {
  return (
    <StepScreenLayout
      icon={<FaRegAddressCard />}
      description="Para continuar por favor ingresa un Nit a continuación"
      title="Ingresar"
      onNext={nextStep}
    >
      <InputField label="Nit" name="nit" onChange={() => {}} value="" />
    </StepScreenLayout>
  );
};

NitEntry.propTypes = {
  nextStep: PropTypes.func.isRequired,
};
