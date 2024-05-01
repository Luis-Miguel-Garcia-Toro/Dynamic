import { format } from "@/common/presentation/utils";
import { BsTelephone } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { StepScreenLayout } from "../subcomponents";
import Styles from "./scss/contact-selection.module.scss";
import { useContactSelection } from "./view-model";

export const ContactSelection = () => {
  const {
    prevStep,
    contactList,
    onChangeSelectedContact,
    contactSelected,
    isLoading,
    onNextStep,
  } = useContactSelection();

  return (
    <StepScreenLayout
      description="Para continuar con el proceso de autenticación, selecciona un número de teléfono o correo electrónico."
      title="Selecciona un correo o teléfono"
      icon={<RiContactsBookLine />}
      onBack={prevStep}
      isLoading={isLoading}
      onNext={onNextStep}
    >
      <div>
        {contactList.map((contact, index) => {
          const isContactSelected =
            contact.phone === contactSelected?.phone &&
            index === contactSelected?.index;

          return (
            <div
              onClick={() => onChangeSelectedContact(contact, index)}
              className={`${Styles.ContactItem} ${
                isContactSelected ? Styles.Selected : ""
              }`}
              key={index}
            >
              <div className={Styles.ContactInfo}>
                {/* {type === "tel" ? <BsTelephone /> : <MdOutlineEmail />} */}
                <BsTelephone />
                <span>{format.maskPhone(contact.phone)}</span>
              </div>

              <div className={Styles.ContactCheck}>
                <FaCheckCircle size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </StepScreenLayout>
  );
};
