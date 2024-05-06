import { BusinessCard } from "./components";
import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";

export const HomePage = () => {
  const { businessList, nit, onNavigateToBranch } = useHomePage();
  return (
    <main className={Styles.HomePageContainer}>
      <div className={Styles.HomePageHeader}>
        <div className={`${Styles.HomePageHeaderOptions} fadeIn`}>
          <h1>Tus negocios disponibles</h1>
        </div>
        <h2>Nit - {nit}</h2>
      </div>

      <section className={Styles.BusinessListContainer}>
        {businessList.map((business) => (
          <BusinessCard
            navigateTo={() => onNavigateToBranch(business)}
            business={business}
            key={business.business}
          />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
