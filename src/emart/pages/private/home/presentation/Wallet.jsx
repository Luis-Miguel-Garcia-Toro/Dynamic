import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";
import { ButtonNavigate } from "@/common/presentation/components";
import { BsBuildingCheck } from "react-icons/bs";
import { BusinessCardFactura } from "./components/business-card/BusinessCardFactura";
import { BranchItemFactura } from "../../branch/presentation/components/branch-item/BranchItemFactura";

export const Wallet = () => {
  const { businessList, nit, onNavigateToBranch } = useHomePage();
  const orders = [
    {
      document: 1234678,
      created_at: "2024-01-01",
      end_date: "2024-12-01",
      total: 150000,
      pending_value: true,
    },
    {
      document: 5678940,
      created_at: "2023-01-01",
      end_date: "2023-05-01",
      total: 180000,
      pending_value: false,
    },
  ];
  return (
    <main className={Styles.HomePageContainer}>
      <div className={Styles.HomeBackground} />

      <div className={Styles.HomePageHeader}>
        <ButtonNavigate
          color="var(--color-label)"
          navigateTo={() => window.history.back()}
          text="Regresar"
        />
        <br />
        <div className={`${Styles.HomePageHeaderOptions} fadeIn`}>
          <h1>Tu Wallet</h1>
        </div>
        <h2>Nit - {nit}</h2>
      </div>
      <section className={Styles.BusinessListContainer}>
        {businessList.map((business) => (
          <BusinessCardFactura business={business} key={business.business} />
        ))}
      </section>
      <section className={Styles.BranchListContainer}>
        <div className={`${Styles.BranchListTitle} fadeIn`}>
          <BsBuildingCheck size={20} color="var(--color-label)" />
          <h2>Sucursales</h2>
          <BranchItemFactura
            orders={orders}
            branch={"branch"}
            colorBusiness="gris"
            key="1000"
          />
        </div>
      </section>
      <h2>TOTAL A PAGAR : {}</h2>
      <button className={Styles.buttonPay}>Pagar en linea</button>
    </main>
  );
};

export default Wallet;
