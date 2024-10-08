import { FaCartShopping } from "react-icons/fa6"
import { IoMdMenu } from "react-icons/io"
import { Link } from "react-router-dom"
import { format } from "../../../../../common/presentation/utils"
import { HeaderCategories } from "../../../../pages/public/products/presentation/components"
import SearchBar from "../searchBar/Search"
import Styles from "./scss/header.module.scss"
import { useHeader } from "./view-model/useHeader"
import { useEffect, useState } from "react"
import FloatingBar from "../floatingBar/floatingBar"
import {usePageContext} from "../../../../common/infrastructure/store"
import { useAppStore } from "../../../../../common/infrastructure/store/app.store";

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
  const {updateOptionActive} = usePageContext();
  const [urlPoint, setUrlPoint] = useState("");
  const { user } = useAppStore();

  useEffect(() => {
    const url = window.location.href;
    let logoUrl = url.includes("cart") ? 'carrito' : 'noCarrito'
    setUrlPoint(logoUrl);
  }, []);

  return (
    <header ref={headerRef} className={Styles.HeaderContainer}>
      <div className={Styles.HeaderContent}>
        <div className={`${Styles.HeaderLinkLogo} fadeIn`} onClick={() => updateOptionActive("home")}>
          <figure>
            <img src={imageLogo} alt="Ir a la tienda" />
          </figure>
        </div>
        <div className={urlPoint === 'carrito' ? `${Styles.FatherSearch} fadeIn` : ""}>
          <div className={`${Styles.HeaderSearch} fadeIn`}>
            <SearchBar />
          </div>
        </div>

        <div className={`${Styles.HeaderOptions} fadeIn`} >
          <nav className={Styles.HeaderMenu}>
            <ul>
              <li style={{ cursor: "pointer" }} onClick={() => updateOptionActive("menu")}>
                <IoMdMenu size={25} /><span> Menú</span>
              </li>
            </ul>
          </nav>

          <button
            className={`${Styles.HeaderCart} ${summaryTotal > 0 ? Styles.HasTotal : ""
              }`}
            onClick={() => {user ?  updateOptionActive("cart") : window.location.href = `/login`}}
          >
            <div className={urlPoint === 'carrito' ? `${Styles.HeaderCartIconCart}` : Styles.HeaderCartIcon}>
              {totalItemsInCart > 0 && <span >{totalItemsInCart}</span>}
              <FaCartShopping style={{ color: "#E4061F" }} size={25} />
            </div>
            {summaryTotal > 0 && (
              <span className={Styles.Total}>{format.formatPrice(summaryTotal)}</span>
            )}
          </button>
        </div>
      </div>
      {/* {urlPoint != 'carrito' && <FloatingBar />} */}

      {showHeaderCategories && <HeaderCategories />}
    </header>
  );
};
