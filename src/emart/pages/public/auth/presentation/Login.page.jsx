import { Stepper } from "@/common/presentation/components"
import {
  AuthMethod,
  LoginCredentials,
  NitEntry
} from "./components"
import { StepperLogin } from "./components/subcomponents"
import Styles from "./scss/login.module.scss"
import { useLoginPage } from "./view-model/useLoginPage"

const stepsPages = {
  nit: <NitEntry />,
  ["auth-method"]: <AuthMethod />, 
  login: <LoginCredentials />,
};

export const LoginPage = () => {
  const { currentKeyStep, screensList, totalSteps, onPrevStep, currentStep } =
    useLoginPage();
  return (
    <main className={Styles.LoginContainer}>
      <section className={Styles.StepsContainer}>
        <div className={Styles.StepperMobile}>
          <Stepper
            onBack={onPrevStep}
            currentStep={currentStep}
            steps={totalSteps}
          />
        </div>
        <div className={Styles.StepperDesktop}>
          <StepperLogin currentStep={currentStep} stepsList={screensList} />
        </div>
      </section>
      <section className={Styles.LoginContent}>
        <div>{stepsPages[currentKeyStep]}</div>
      </section>
    </main>
  );
};

export default LoginPage;
