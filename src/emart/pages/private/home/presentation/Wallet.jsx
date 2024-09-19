import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";
import { ButtonNavigate } from "@/common/presentation/components";
import { BsBuildingCheck } from "react-icons/bs";
import { BusinessCardFactura } from "./components/business-card/BusinessCardFactura";
import { BranchItemFactura } from "../../branch/presentation/components/branch-item/BranchItemFactura";
import { useContextWallet } from '../../../../context/ContextWallet'
import { useEffect, useState } from "react";
import { getWallet } from '../../../../authServices/authWallet/walletAuth'

export const Wallet = () => {
  const { businessSelected } = useContextWallet()
  const { businessList, nit, onNavigateToBranch } = useHomePage();
  const [orders, setOrders] = useState([]);


  const getWalletClient = async () => {
    let res = await getWallet(nit)
    if (res.data.data.length > 0) {
      setOrders(res.data.data)
    } else {
      setOrders([])
    }
  }

  useEffect(() => {
    getWalletClient()
  }, [businessSelected])

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', margin:"10px" }}>        <BsBuildingCheck size={20} color="var(--color-label)" />
            <h2>Sucursales</h2></div>

          <BranchItemFactura
            orders={orders}
            branch={"branch"}
            colorBusiness="gris"
            key="1000"
          />
        </div>
      </section>

    </main>
  );
};

export default Wallet;
