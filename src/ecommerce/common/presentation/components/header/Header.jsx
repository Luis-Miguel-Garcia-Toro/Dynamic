import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HeaderCategories } from "../../../../pages/private/products/presentation/components";
import Styles from "./scss/header.module.scss";
import { useHeader } from "./view-model/useHeader";

export const Header = () => {
  const { headerRef, showHeaderCategories, totalItemsInCart } = useHeader();

  return (
    <header ref={headerRef} className={Styles.HeaderContainer}>
      <div className={Styles.HeaderContent}>
        <Link className={Styles.HeaderLinkLogo} to="/home">
          <h1>Logo</h1>
        </Link>

        <div>
          <Link className={Styles.HeaderCart} to="/cart">
            {totalItemsInCart > 0 && <span>{totalItemsInCart}</span>}
            <FaCartShopping size={20} color="var(--color-white)" />
          </Link>
        </div>
      </div>
      {showHeaderCategories && <HeaderCategories />}
    </header>
  );
};
