import { HeaderCategories } from "../index";
import Styles from "./scss/header.module.scss";
import { useHeader } from "./view-model/useHeader";

export const Header = () => {
  const { headerRef, showHeaderCategories } = useHeader();

  return (
    <header ref={headerRef} className={Styles.HeaderContainer}>
      <div className={Styles.HeaderContent}>
        <h1>Logo</h1>
      </div>
      {showHeaderCategories && <HeaderCategories />}
    </header>
  );
};
