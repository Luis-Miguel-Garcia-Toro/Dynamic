import React, { useState, useEffect } from "react";
import { BusinessCard } from "./components";
import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";
import Wallet from "./Wallet";
import WalletUser from "./subPages/WalletUser";
import MenuOptions from "./subPages/MenuOptions";
import MenuOptionsBar from "./subPages/MenuOptionsBar";
import { useContextWallet } from "../../../../context/ContextWallet";
import StatusPaymentWompy from "./subPages/StatusPaymentWompy";
import {GET_RESULT_PAYMENT} from '../../../../Global/globalEmar'
import axios from "axios";

export const HomePage = () => {
  const { businessList, nit, onNavigateToBranch } = useHomePage();
  const { optionSelected, tokenWompy, idLastPayment } = useContextWallet();
  const [StatusWompy, setStatusWompy] = useState(false);
  const [dataPayment, setDataPayment] = useState();

  const getPaymentResult = () => {
    axios.get(`${GET_RESULT_PAYMENT}?url_id=${idLastPayment}`,{
      headers: {
        Authorization: `Bearer ${tokenWompy}`
      }
    }).then((res) => {
      console.log(res);
      setDataPayment(res.data)
      setStatusWompy(true)
    }).catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
      getPaymentResult()
     
    } else {
      setStatusWompy(false)
    }
    // id=113848-1727207809-41147
  }, []);

  return (
    <>
      {StatusWompy ? (
        <>
          <main className={Styles.HomePageContainer}>
            <div className={Styles.HomeBackground} />
            <div className={Styles.HomePageHeader}>
              <div className={`${Styles.HomePageHeaderOptions} fadeIn`}>
                <h1>Resumen de transacción</h1>
              </div>
              <h2>Nit - {nit}</h2>
              <StatusPaymentWompy dataPayment={dataPayment}/>
            </div>
            <div />
          </main>
        </>
      ) : (
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
          <MenuOptionsBar />
        </>
      )}
    </>
  );
};

export default HomePage;
