import { FaCartShopping } from "react-icons/fa6"
import { IoMdMenu } from "react-icons/io"
import { Link } from "react-router-dom"
import { format } from "../../../../../common/presentation/utils"
import { HeaderCategories } from "../../../../pages/public/products/presentation/components"
import SearchBar from "../searchBar/Search"
import Styles from "./scss/header.module.scss"
import { useHeader } from "./view-model/useHeader"

const menuItems = [
  {
    name: "Menú",
    link: "/menu",
    icon: <IoMdMenu />,
  },
];

export const Header = () => {
  const {
    headerRef,
    showHeaderCategories,
    totalItemsInCart,
    summaryTotal,
    goToCart,
    imageLogo,
  } = useHeader();

  return (
    <header ref={headerRef} className={Styles.HeaderContainer}>
      <div className={Styles.HeaderContent}>
        <Link className={`${Styles.HeaderLinkLogo} fadeIn`} to="/products">
          <figure>
            <img src={imageLogo} alt="Ir a la tienda" />
          </figure>
        </Link>

        <div className={`${Styles.HeaderSearch} fadeIn`}>
          <SearchBar />
        </div>

        <div className={`${Styles.HeaderOptions} fadeIn`}>
          <nav className={Styles.HeaderMenu}>
            <ul>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.link}>
                    {item.icon} <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`${Styles.HeaderCart} ${
              summaryTotal > 0 ? Styles.HasTotal : ""
            }`}
            onClick={goToCart}
          >
            <div className={Styles.HeaderCartIcon}>
              {totalItemsInCart > 0 && <span>{totalItemsInCart}</span>}
              <FaCartShopping size={20} style={{ color: "#E4061F" }} />
            </div>
            {summaryTotal > 0 && (
              <span>{format.formatPrice(summaryTotal)}</span>
            )}
          </button>
        </div>
      </div>

      {showHeaderCategories && <HeaderCategories />}
    </header>
  );
};
