import PropTypes from "prop-types";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { StepScreenLayout } from "../subcomponents";
import Styles from "./scss/contact-selection.module.scss";

const contactsList = [
  {
    id: 1,
    name: "3006730496",
    type: "tel",
  },
  {
    id: 2,
    name: "JhX5z@example.com",
    type: "email",
  },
  {
    id: 3,
    name: "3006730496",
    type: "tel",
  },
  {
    id: 4,
    name: "JhX5z@example.com",
    type: "email",
  },
  {
    id: 5,
    name: "3006730496",
    type: "tel",
  },
  {
    id: 6,
    name: "JhX5z@example.com",
    type: "email",
  },
];

export const ContactSelection = ({ nextStep, backStep }) => {
  return (
    <StepScreenLayout
      description="Debes seleccionar un número de teléfono o correo para continuar con el proceso de autenticación."
      title="Selecciona un correo o teléfono"
      icon={<RiContactsBookLine />}
      onBack={backStep}
    >
      <div>
        {contactsList.map(({ id, name, type }) => (
          <div onClick={nextStep} className={Styles.ContactItem} key={id}>
            <div className={Styles.ContactInfo}>
              {type === "tel" ? <BsTelephone /> : <MdOutlineEmail />}
              <span>{name}</span>
            </div>

            <IoIosArrowRoundForward size={20} />
          </div>
        ))}
      </div>
    </StepScreenLayout>
  );
};

ContactSelection.propTypes = {
  nextStep: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
};
