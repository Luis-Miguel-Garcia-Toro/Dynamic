import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";
import { ButtonNavigate } from "@/common/presentation/components";
import { BsBuildingCheck } from "react-icons/bs";
import { BusinessCardFactura } from "./components/business-card/BusinessCardFactura";
import { BranchItemFactura } from "../../branch/presentation/components/branch-item/BranchItemFactura";
import {useContextWallet} from '../../../../context/ContextWallet'
import { useEffect, useState } from "react";
import {getWallet} from '../../../../authServices/authWallet/walletAuth'

export const Wallet = () => {
  const {businessSelected} = useContextWallet()
  const { businessList, nit, onNavigateToBranch } = useHomePage();
  const [orders, setOrders] = useState([]);


  const getWalletClient = async () => {
    let res = await getWallet('1058058338')
    if(res.data.data.length > 0){
      console.log(res.data.data);
      setOrders(res.data.data)
    }else{
      setOrders([])
    }
  }

  useEffect(() => {
    getWalletClient()
    console.log(businessSelected)
  },[businessSelected])

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
