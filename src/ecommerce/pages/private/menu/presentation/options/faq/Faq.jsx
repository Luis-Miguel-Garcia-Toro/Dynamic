import { useEcommerceStore } from "../../../../../../common/infrastructure/store";
import { FaqItem } from "./components";
import Styles from "./scss/faq.module.scss";

export const Faq = () => {
  const configPage = useEcommerceStore((state) => state.configPages);
  const { frequent_question = [] } = configPage;

  return (
    <main>
      <section className={Styles.FaqGrid}>
        {frequent_question.map((item, index) => (
          <FaqItem item={item} key={index} />
        ))}
      </section>
    </main>
  );
};
