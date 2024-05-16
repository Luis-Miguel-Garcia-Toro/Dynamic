import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HeaderCategories } from "../index";
import Styles from "./scss/header.module.scss";
import { useHeader } from "./view-model/useHeader";

export const Header = () => {
  const { headerRef, showHeaderCategories, getTotalItems } = useHeader();

  return (
    <header ref={headerRef} className={Styles.HeaderContainer}>
      <div className={Styles.HeaderContent}>
        <Link className={Styles.HeaderLinkLogo} to="/home">
          <h1>Logo</h1>
        </Link>

        <div>
          <Link className={Styles.HeaderCart} to="/cart">
            <span>{getTotalItems()}</span>
            <FaCartShopping size={20} color="var(--color-white)" />
          </Link>
        </div>
      </div>
      {showHeaderCategories && <HeaderCategories />}
    </header>
  );
};
