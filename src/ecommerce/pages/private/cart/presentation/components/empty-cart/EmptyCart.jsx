import { Button } from "../../../../../../../common/presentation/components/ui/button/Button";
import Styles from "./scss/empty-cart.module.scss";

import { useNavigate } from "react-router-dom";
import emptyCartImage from "../../../../../../../assets/img/box-delivery-package.svg";

export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className={Styles.EmptyCartContainer}>
      <section className={Styles.EmptyCartContent}>
        <h1 className="title fadeIn">Mi carrito</h1>

        <article className={`${Styles.EmptyCartArticle} fadeIn`}>
          <figure>
            <img src={emptyCartImage} alt="" />
          </figure>

          <h2>¡Tu carrito se encuentra vacío!</h2>
          <Button
            label="Explorar productos"
            onClick={() => navigate("/home")}
          />
        </article>
      </section>
    </div>
  );
};
