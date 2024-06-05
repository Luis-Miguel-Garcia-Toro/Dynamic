import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { format } from "../../../../../common/presentation/utils";
import { HeaderCategories } from "../../../../pages/public/products/presentation/components";
import Styles from "./scss/header.module.scss";
import { useHeader } from "./view-model/useHeader";

export const Header = () => {
  const {
    headerRef,
    showHeaderCategories,
    totalItemsInCart,
    summaryTotal,
    goToCart,
  } = useHeader();

  return (
    <header ref={headerRef} className={Styles.HeaderContainer}>
      <div className={Styles.HeaderContent}>
        <Link className={Styles.HeaderLinkLogo} to="/products">
          <h1>Logo</h1>
        </Link>

        <button
          className={`${Styles.HeaderCart} ${
            summaryTotal > 0 ? Styles.HasTotal : ""
          }`}
          onClick={goToCart}
        >
          <div className={Styles.HeaderCartIcon}>
            {totalItemsInCart > 0 && <span>{totalItemsInCart}</span>}
            <FaCartShopping size={20} />
          </div>
          {summaryTotal > 0 && <span>{format.formatPrice(summaryTotal)}</span>}
        </button>
      </div>
      {showHeaderCategories && <HeaderCategories />}
    </header>
  );
};
