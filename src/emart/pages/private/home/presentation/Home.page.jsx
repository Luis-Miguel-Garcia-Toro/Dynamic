import { BusinessCard } from "./components";
import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";
import Wallet from "./Wallet";
import WalletUser from "./subPages/WalletUser";
// import MenuOptions from "./subPages/MenuOptions";
import { useContextWallet } from "../../../../context/ContextWallet";

export const HomePage = () => {
  const { businessList, nit, onNavigateToBranch } = useHomePage();
  const { optionSelected } = useContextWallet();

  return (
    <>
      {optionSelected === "home" ? (
        <main className={Styles.HomePageContainer}>
          <div className={Styles.HomeBackground} />
          <div className={Styles.HomePageHeader}>
            <div className={`${Styles.HomePageHeaderOptions} fadeIn`}>
              <h1>Tus negocios disponibles</h1>
            </div>
            <h2>Nit - {nit}</h2>
          </div>
          <div className={Styles.HomePageHeaderButton} />

          <WalletUser />

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
      ) : (
        <Wallet />
      )}
      {/* <MenuOptions /> */}
      
    </>
  );
};

export default HomePage;
