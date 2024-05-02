import { CiLogout } from "react-icons/ci";
import { BusinessCard } from "./components";
import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";

export const HomePage = () => {
  const { businessList, nit, logout } = useHomePage();

  console.log({ businessList });

  return (
    <main className={Styles.HomePageContainer}>
      <div className={Styles.HomePageHeader}>
        <div className={Styles.HomePageHeaderOptions}>
          <h1>Tus negocios disponibles</h1>
          <div className={Styles.LogoutContainer}>
            <span>Salir</span>
            <CiLogout onClick={logout} size={40} color="var(--color-primary)" />
          </div>
        </div>
        <h2>NIt - {nit}</h2>
      </div>

      <section className={Styles.BusinessListContainer}>
        {businessList.map((business) => (
          <BusinessCard business={business} key={business.business} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
