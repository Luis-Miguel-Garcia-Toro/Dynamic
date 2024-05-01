import { Stepper } from "@/common/presentation/components";
import {
  // BranchList,
  // BusinessList,
  ContactSelection,
  LoginCredentials,
  NitEntry,
  VerificationCode,
} from "./components";
import { StepperLogin } from "./components/subcomponents";
import Styles from "./scss/login.module.scss";
import { useLoginPage } from "./view-model/useLoginPage";

const stepsPages = {
  nit: (props) => <NitEntry {...props} />,
  contact: (props) => <ContactSelection {...props} />,
  verification: (props) => <VerificationCode {...props} />,
  login: (props) => <LoginCredentials {...props} />,
  // business: <BusinessList />,
  // branch: <BranchList />,
};

export const LoginPage = () => {
  const { currentKeyStep, currentStepNumber, screensList, backStep, nextStep } =
    useLoginPage();
  return (
    <main className={Styles.LoginContainer}>
      <section className={Styles.StepsContainer}>
        <div className={Styles.StepperMobile}>
          <Stepper
            onBack={backStep}
            currentStep={currentStepNumber}
            steps={screensList.length}
          />
        </div>
        <div className={Styles.StepperDesktop}>
          <StepperLogin
            currentStep={currentStepNumber}
            stepsList={screensList}
          />
        </div>
      </section>
      <section className={Styles.LoginContent}>
        <div>{stepsPages[currentKeyStep]({ backStep, nextStep })}</div>
      </section>
    </main>
  );
};

export default LoginPage;
